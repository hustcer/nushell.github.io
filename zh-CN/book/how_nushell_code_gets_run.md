# Nushell 代码如何被运行

你可能注意到了，Nushell 的行为与其它 Shell 和动态语言有很大不同。在[Thinking in Nu](thinking_in_nu.md#think-of-nushell-as-a-compiled-language)中，我们建议你*把 Nushell 当成一种编译语言*，但我们并没有对其原因进行深入分析。本节希望能填补这一空白。

首先，让我们举几个例子，这些你可能会凭直觉去尝试，但在 Nushell 中是行不通的。

1. `source` 一个动态路径

```
source $"($my_path)/common.nu"
```

2. 在脚本中写入一个文件并 `source` 该文件

```
"def abc [] { 1 + 2 }" | save output.nu
source "output.nu"
```

3. 改变一个目录，并在其中 `source` 一个路径（即使文件存在）

```
if ('spam/foo.nu' | path exists) {
    cd spam
    source-env foo.nu
}
```

上述所有的例子都不能工作的根本原因是因为**解析和评估**步骤被**不允许使用 eval 函数**严格分离。在本节的其余部分，我们将详细解释这意味着什么，为什么我们要这样做，以及其影响是什么。解释的目标是尽可能地简单，但如果你以前用某种语言写过程序，可能会有帮助。

## 解析和评估

### 解释型语言

让我们从一个简单的 Nushell "hello world" 程序开始：

```
# hello.nu

print "Hello world!"
```

当你运行 `nu hello.nu` 时，Nushell 的解释器直接运行该程序并将结果打印到屏幕上。这与其他典型的解释型语言，如 Python 或 Bash 类似（从最高级别而言）。如果你用这些语言中的任何一种写一个类似的 "hello world" 程序，并调用 `python hello.py` 或 `bash hello.bash`，结果就会打印到屏幕上。我们可以说，解释器以某种表现形式（例如，源码）接收程序，运行它，并给你结果：

```
源码 --> 解释 --> 结果
```

在实现上，Nushell 的解释器被分成两部分，像这样：

```
1. 源码 --> 解析 --> 中间表示（IR）
2. IR --> 评估 --> 结果
```

首先，源代码被解析器分析并转换为中间表示（IR），在 Nushell 的例子中，中间表示只是一些数据结构。然后，这些数据结构被传递给引擎，引擎对它们进行评估并产生结果。这并没有什么不寻常的。例如，Python 的源代码在评估前通常被转换成[字节码](https://en.wikipedia.org/wiki/Bytecode)。

### Compiled Languages

On the other side are languages that are typically "compiled", such as C, C++, or Rust. Assuming a simple ["hello world"](https://doc.rust-lang.org/stable/book/ch01-02-hello-world.html) in Rust

```rust
// main.rs

fn main() {
    println!("Hello, world!");
}
```

you first need to _compile_ the program into [machine code instructions](https://en.wikipedia.org/wiki/Machine_code) and store the binary file to a disk (`rustc main.rs`). Then, to produce a result, you need to run the binary (`./main`), which passes the instructions to the CPU:

```
1. source code --> compiler --> machine code
2. machine code --> CPU --> result
```

You can see the compile-run sequence is not that much different from the parse-evaluate sequence of an interpreter. You begin with a source code, parse (or compile) it into some IR (or machine code), then evaluate (or run) the IR to get a result. You could think of machine code as just another type of IR and the CPU as its interpreter.

One big difference, however, between interpreted and compiled languages is that interpreted languages typically implement an _eval function_ while compiled languages do not. What does it mean?

### Eval Function

Most languages considered as "dynamic" or "interpreted" have an eval function, for example Python (it has two, [eval](https://docs.python.org/3/library/functions.html#eval) and [exec](https://docs.python.org/3/library/functions.html#exec)) or [Bash](https://linux.die.net/man/1/bash). It is used to take source code and interpret it within a running interpreter. This can get a bit confusing, so let's give a Python example:

```python
# hello_eval.py

print("Hello world!")
eval("print('Hello eval!')")
```

When you run the file (`python hello_eval.py`), you'll see two messages: "Hello world!" and "Hello eval!". Here is what happened:

1. Parse the whole source code
2. Evaluate `print("Hello world!")`
3. To evaluate `eval("print('Hello eval!')")`:
   3.1. Parse `print('Hello eval!')`
   3.2. Evaluate `print('Hello eval!')`

Of course, you can have more fun and try `eval("eval(\"print('Hello eval!')\")")` and so on...

You can see the eval function adds a new "meta" layer into the code execution. Instead of parsing the whole source code, then evaluating it, there is an extra parse-eval step during the evaluation. This means that the IR produced by the parser (whatever it is) can be further modified during the evaluation.

We've seen that without `eval`, the difference between compiled and interpreted languages is actually not that big. This is exactly what we mean by [thinking of Nushell as a compiled language](https://www.nushell.sh/book/thinking_in_nu.html#think-of-nushell-as-a-compiled-language): Despite Nushell being an interpreted language, its lack of `eval` gives it characteristics and limitations typical for traditional compiled languages like C or Rust. We'll dig deeper into what it means in the next section.

## Implications

Consider this Python example:

```python
exec("def hello(): print('Hello eval!')")
hello()
```

_Note: We're using `exec` instead of `eval` because it can execute all valid Python code, not just expressions. The principle is similar, though._

What happens:

1. Parse the whole source code
2. To evaluate `exec("def hello(): print('Hello eval!')")`:
   2.1. Parse `def hello(): print('Hello eval!')`
   2.2 Evaluate `def hello(): print('Hello eval!')`
3. Evaluate `hello()`

Note, that until step 2.2, the interpreter has no idea a function `hello` exists! This makes static analysis of dynamic languages challenging. In the example, the existence of `hello` function cannot be checked just by parsing (compiling) the source code. You actually need to go and evaluate (run) the code to find out. While in a compiled language, missing function is a guaranteed compile error, in a dynamic interpreted language, it is a runtime error (which can slip unnoticed if the line calling `hello()` is, for example, behind an `if` condition and does not get executed).

In Nushell, there are **exactly two steps**:

1. Parse the whole source code
2. Evaluate the whole source code

This is the complete parse-eval sequence.

Not having `eval`-like functionality prevents `eval`-related bugs from happening. Calling a non-existent function is 100% guaranteed parse-time error in Nushell. Furthermore, after the parse step, we have a deep insight into the program and we're 100% sure it is not going to change during evaluation. This trivially allows for powerful and reliable static analysis and IDE integration which is challenging to achieve with more dynamic languages. In general, you have more peace of mind when scaling Nushell programs to bigger applications.

_Before going into examples, one note about the "dynamic" and "static" terminology. Stuff that happens at runtime (during evaluation, after parsing) is considered "dynamic". Stuff that happens before running (during parsing / compilation) is called "static". Languages that have more stuff (such as `eval`, type checking, etc.) happening at runtime are sometimes called "dynamic". Languages that analyze most of the information (type checking, [data ownership](https://doc.rust-lang.org/stable/book/ch04-00-understanding-ownership.html), etc.) before evaluating the program are sometimes called "static". The whole debate can get quite confusing, but for the purpose of this text, the main difference between a "static" and "dynamic" language is whether it has or has not the eval function._

## Common Mistakes

By insisting on strict parse-evaluation separation, we lose much of a flexibility users expect from dynamic interpreted languages, especially other shells, such as bash, fish, zsh and others. This leads to the examples at the beginning of this page not working. Let's break them down one by one

_Note: The following examples use `source`, but similar conclusions apply to other commands that parse Nushell source code, such as `use`, `overlay use`, `hide`, `register` or `source-env`._

### 1. Sourcing a dynamic path

```
source $"($my_path)/common.nu"
```

Let's break down what would need to happen for this to work (assuming `$my_path` is set somewhere):

1. Parse `source $"($my_path)/common.nu"`
2. To evaluate `source $"($my_path)/common.nu"`:
   2.1. Parse `$"($my_path)/common.nu"`
   2.2. Evaluate `$"($my_path)/common.nu"` to get the file name
   2.3. Parse the contents of the file
   2.4. Evaluate the contents of the file

You can see the process is similar to the `eval` functionality we talked about earlier. Nesting parse-evaluation cycles into the evaluation is not allowed in Nushell.

To give another perspective, here is why it is helpful to _think of Nushell as a compiled language_. Instead of

```
let my_path = 'foo'
source $"($my_path)/common.nu"
```

imagine it being written in some typical compiled language, such as C++

```cpp
#include <string>

std::string my_path("foo");
#include <my_path + "/common.h">
```

or Rust

```rust!
let my_path = "foo";
use format!("{}::common", my_path);
```

If you've ever written a simple program in any of these languages, you can see these examples do not make a whole lot of sense. You need to have all the source code files ready and available to the compiler beforehand.

### 2. Write to a file and source it in a single script

```
"def abc [] { 1 + 2 }" | save output.nu
source "output.nu"
```

Here, the sourced path is static (= known at parse-time) so everything should be fine, right? Well... no. Let's break down the sequence again:

1. Parse the whole source code
   1.1. Parse `"def abc [] { 1 + 2 }" | save output.nu`
   1.2. Parse `source "output.nu"` - 1.2.1. Open `output.nu` and parse its contents
2. Evaluate the whole source code
   2.1. Evaluate `"def abc [] { 1 + 2 }" | save output.nu` to generate `output.nu`
   2.2. ...wait what???

We're asking Nushell to read `output.nu` before it even exists. All the source code needs to be available to Nushell at parse-time, but `output.nu` is only generated during evaluation. Again, it helps here to _think of Nushell as a compiled language_.

### 3. Change a directory and source a path within

(We assume the `spam/foo.nu` file exists.)

```
if ('spam/foo.nu' | path exists) {
    cd spam
    source-env foo.nu
}
```

This one is similar to the previous example. `cd spam` changes the directory _during evaluation_ but `source-env` attempts to open and read `foo.nu` during parsing.

## REPL

[REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) is what happens when you run `nu` without any file. You launch an interactive prompt. By

```
> some code...
```

we denote a REPL entry followed by pressing Enter. For example

```
> print "Hello world!"
Hello world!

> ls
# prints files and directories...
```

means the following:

1. Launch `nu`
2. Type `print "Hello world!"`, press Enter
3. Type `ls`, press Enter

Hopefully, that's clear. Now, when you press Enter, these things happen:

1. Parse the line input
2. Evaluate the line input
3. Merge the environment (such as the current working directory) to the internal Nushell state
4. Wait for another input

In other words, each REPL invocation is its own separate parse-evaluation sequence. By merging the environment back to the Nushell's state, we maintain continuity between the REPL invocations.

To give an example, we showed that

```
cd spam
source-env foo.nu
```

does not work because the directory will be changed _after_ `source-env` attempts to read the file. Running these commands as separate REPL entries, however, works:

```
> cd spam

> source-env foo.nu
# yay, works!
```

To see why, let's break down what happens in the example:

1. Launch `nu`
2. Parse `cd spam`
3. Evaluate `cd spam`
4. **Merge environment (including the current directory) into the Nushell state**
5. Parse `source-env foo.nu`
6. Evaluate `source-env foo.nu`
7. Merge environment (including the current directory) into the Nushell state

When `source-env` tries to open `foo.nu` during the parsing in step 5., it can do so because the directory change from step 3. was merged into the Nushell state in step 4. and therefore is visible in the following parse-evaluation cycles.

### Parse-time Evaluation

While it is impossible to add parsing into the evaluation, we can add _a little bit_ of evaluation into parsing. This feature has been added [only recently](https://github.com/nushell/nushell/pull/7436) and we're going to expand it as needed.

One pattern that this unlocks is being able to `source`/`use`/etc. a path from a "variable". We've seen that

```
let some_path = 'foo/common.nu'
source $some_path
```

does not work, but we can do the following:

```
const some_path = 'foo/common.nu'
source $some_path
```

We can break down what is happening again:

1. Parse the whole source code
   1.1. Parse `const some_path = 'foo/common.nu'` - 1.1.1. Evaluate* `'foo/common.nu'` and store it as a `some_path` constant
   1.2. Parse `source $some_path` - 1.2.1. Evaluate* `$some_path`, see that it is a constant, fetch it - 1.2.2. Parse the `foo/common.nu` file
2. Evaluate the whole source code
   2.1. Evaluate `const some_path = 'foo/common.nu'` (i.e., add the `foo/common.nu` string to the runtime stack as `some_path` variable)
   2.2. Evaluate `source $some_path` (i.e., evaluate the contents of `foo/common.nu`)

This still does not violate our rule of not having an eval function, because an eval function adds additional parsing to the evaluation step. With parse-time evaluation we're doing the opposite.

Also, note the \* in steps 1.1.1. and 1.2.1. The evaluation happening during parsing is very restricted and limited to only a small subset of what is normally allowed during a regular evaluation. For example, the following is not allowed:

```
const foo_contents = (open foo.nu)
```

By allowing _everything_ during parse-time evaluation, we could set ourselves up to a lot of trouble (think of generating an infinite stream in a subexpression...). Generally, only a simple expressions _without side effects_ are allowed, such as string literals or integers, or composite types of these literals (records, lists, tables).

Compiled ("static") languages also tend to have a way to convey some logic at compile time, be it C's preprocessor, Rust's macros, or [Zig's comptime](https://kristoff.it/blog/what-is-zig-comptime). One reason is performance (if you can do it during compilation, you save the time during runtime) which is not as important for Nushell because we always do both parsing and evaluation, we do not store the parsed result anywhere (yet?). The second reason is similar to Nushell's: Dealing with limitations caused by the absence of the eval function.

## Conclusion

Nushell operates in a scripting language space typically dominated by "dynamic" "interpreted" languages, such as Python, bash, zsh, fish, etc. While Nushell is also "interpreted" in a sense that it runs the code immediately, instead of storing the intermediate representation (IR) to a disk, one feature sets it apart from the pack: It does not have an **eval function**. In other words, Nushell cannot parse code and manipulate its IR during evaluation. This gives Nushell one characteristic typical for "static" "compiled" languages, such as C or Rust: All the source code must be visible to the parser beforehand, just like all the source code must be available to a C or Rust compiler. For example, you cannot `source` or `use` a path computed "dynamically" (during evaluation). This is surprising for users of more traditional scripting languages, but it helps to _think of Nushell as a compiled language_.
