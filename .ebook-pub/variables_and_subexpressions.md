# Variables and Subexpressions

There are two types of evaluation expressions in Nushell: variables and subexpressions. You know that you're looking at an evaluation expression because it begins with a dollar sign (`$`). This indicates that when Nushell gets the value in this position, it will need to run an evaluation step to process the expression and then use the resulting value. Both evaluation expression forms support a simple form and a 'path' form for working with more complex data.

## Variables

The simpler of the two evaluation expressions is the variable. During evaluation, a variable is replaced by its value. After creating a variable, we can refer to it using `$` followed by its name.

### Types of Variables

#### Immutable Variables

An immutable variable cannot change its value after declaration. They are declared using the `let` keyword,

```nu
> let val = 42
> print $val
42
```

However, they can be 'shadowed'. Shadowing means that they are redeclared and their initial value cannot be used anymore within the same scope.

```nu
> let val = 42                   # declare a variable
> do { let val = 101;  $val }    # in an inner scope, shadow the variable
101
> $val                           # in the outer scope the variable remains unchanged
42
```

#### Mutable Variables

A mutable variable is allowed to change its value by assignment. These are declared using the `mut` keyword.

```nu
> mut val = 42
> $val += 27
> $val
69
```

There are a couple of assignment operators used with mutable variables

| Operator | Description                                                                |
| -------- | -------------------------------------------------------------------------- |
| `=`      | Assigns a new value to the variable                                        |
| `+=`     | Adds a value to the variable and makes the sum its new value               |
| `-=`     | Subtracts a value from the variable and makes the difference its new value |
| `*=`     | Multiplies the variable by a value and makes the product its new value     |
| `/=`     | Divides the variable by a value and makes the quotient its new value       |
| `++=`    | Appends a list or a value to a variable                                    |

> **Note**
>
> 1. `+=`, `-=`, `*=` and `/=` are only valid in the contexts where their root operations
>    are expected to work. For example, `+=` uses addition, so it can not be used for contexts
>    where addition would normally fail
> 2. `++=` requires that either the variable **or** the argument is a
>    list.

##### More on Mutability

Closures and nested `def`s cannot capture mutable variables from their environment. For example

```nu
# naive method to count number of elements in a list
mut x = 0

[1 2 3] | each { $x += 1 }   # error: $x is captured in a closure
```

To use mutable variables for such behaviour, you are encouraged to use the loops

#### Constant Variables

A constant variable is an immutable variable that can be fully evaluated at parse-time. These are useful with commands that need to know the value of an argument at parse time, like [`source`](/commands/docs/source.md), [`use`](/commands/docs/use.md) and [`register`](/commands/docs/register.md). See [how nushell code gets run](how_nushell_code_gets_run.md) for a deeper explanation. They are declared using the `const` keyword

```nu
const plugin = 'path/to/plugin'
register $plugin
```

### Variable Names

Variable names in Nushell come with a few restrictions as to what characters they can contain. In particular, they cannot contain these characters:

```
.  [  (  {  +  -  *  ^  /  =  !  <  >  &  |
```

It is common for some scripts to declare variables that start with `$`. This is allowed, and it is equivalent to the `$` not being there at all.

```nu
> let $var = 42
# identical to `let var = 42`
```

### Variable Paths

A variable path works by reaching inside of the contents of a variable, navigating columns inside of it, to reach a final value. Let's say instead of `4`, we had assigned a table value:

```nu
> let my_value = [[name]; [testuser]]
```

We can use a variable path to evaluate the variable `$my_value` and get the value from the `name` column in a single step:

```nu
> $my_value.name.0
testuser
```

Sometimes, we don't really know the contents of a variable. Accessing values as shown above can result in errors if the path used does not exist. To more robustly handle this, we can use the question mark operator to return `null` in case the path does not exist, instead of an error, then we would write custom logic to handle the `null`.

For example, here, if row `0` does not exist on `name`, then `null` is returned. Without the question mark operator, an error would have been raised instead

```nu
> let files = (ls)
> $files.name.0?
```

The question mark operator can be used to 'guard' any path

```nu
> let files = (ls)
> $files.name?.0?
```

## Subexpressions

You can always evaluate a subexpression and use its result by wrapping the expression with parentheses `()`. Note that previous versions of Nushell (prior to 0.32) used `$()`.

The parentheses contain a pipeline that will run to completion, and the resulting value will then be used. For example, `(ls)` would run the [`ls`](/commands/docs/ls.md) command and give back the resulting table and `(git branch --show-current)` runs the external git command and returns a string with the name of the current branch. You can also use parentheses to run math expressions like `(2 + 3)`.

Subexpressions can also be pipelines and not just single commands. If we wanted to get a table of files larger than ten kilobytes, we could use a subexpression to run a pipeline and assign its result to a variable:

```nu
> let big_files = (ls | where size > 10kb)
> $big_files
───┬────────────┬──────┬──────────┬──────────────
 # │    name    │ type │   size   │   modified
───┼────────────┼──────┼──────────┼──────────────
 0 │ Cargo.lock │ File │ 155.3 KB │ 17 hours ago
 1 │ README.md  │ File │  15.9 KB │ 17 hours ago
───┴────────────┴──────┴──────────┴──────────────
```

## Subexpressions and paths

Subexpressions also support paths. For example, let's say we wanted to get a list of the filenames in the current directory. One way to do this is to use a pipeline:

```nu
> ls | get name
```

We can do a very similar action in a single step using a subexpression path:

```nu
> (ls).name
```

It depends on the needs of the code and your particular style which form works best for you.

## Short-hand subexpressions (row conditions)

Nushell supports accessing columns in a subexpression using a simple short-hand. You may have already used this functionality before. If, for example, we wanted to only see rows from [`ls`](/commands/docs/ls.md) where the entry is at least ten kilobytes we could write:

```nu
> ls | where size > 10kb
```

The `where size > 10kb` is a command with two parts: the command name [`where`](/commands/docs/where.md) and the short-hand expression `size > 10kb`. We say short-hand because `size` here is the shortened version of writing `$it.size`. This could also be written in any of the following ways:

```nu
> ls | where $it.size > 10kb
> ls | where ($it.size > 10kb)
> ls | where {|$x| $x.size > 10kb }
```

For the short-hand syntax to work, the column name must appear on the left-hand side of the operation (like `size` in `size > 10kb`).
