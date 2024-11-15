# Testing your Nushell code

The [standard library](standard_library.md) has a unit testing framework to ensure that your code works as expected.

## Quick start

Have a file, called `test_math.nu`:

```nushell
use std "assert"
use std "assert equal"
use std "assert skip"

export def test_addition [] {
    assert equal (1 + 2) 3
}

export def test_skip [] {
    assert skip
}

export def test_failing [] {
    assert false "This is just for testing"
}
```

Run the tests:

```
❯ use std
❯ std run-tests
INF|2023-04-12T10:42:29.099|Running tests in test_math
Error:
  × This is just for testing
    ╭─[C:\wip\test_math.nu:13:1]
 13 │ export def test_failing [] {
 14 │     assert false "This is just for testing"
    ·            ──┬──
    ·              ╰── It is not true.
 15 │ }
    ╰────


WRN|2023-04-12T10:42:31.086|Test case test_skip is skipped
Error:
  × some tests did not pass (see complete errors above):
  │
  │       test_math test_addition
  │     ⨯ test_math test_failing
  │     s test_math test_skip
  │
```

## Assert commands

The foundation for every assertion is the `std assert` command. If the condition is not true, it makes an error. For example:

```
❯ std assert (1 == 2)
Error:
  × Assertion failed.
   ╭─[entry #13:1:1]
 1 │ std assert (1 == 2)
   ·             ───┬──
   ·                ╰── It is not true.
   ╰────
```

Optionally, a message can be set to show the intention of the assert command, what went wrong or what was expected:

```nushell
❯ std assert ($a == 19) $"The lockout code is wrong, received: ($a)"
Error:
  × The lockout code is wrong, received: 13
   ╭─[entry #25:1:1]
 1 │ std assert ($a == 19) $"The lockout code is wrong, received: ($a)"
   ·             ────┬───
   ·                 ╰── It is not true.
   ╰────
```

There are many assert commands, which behave exactly as the base one with the proper operator. The additional value for them is the ability for better error messages.

For example this is not so helpful without additional message:

```
❯ std assert ($b | str contains $a)
Error:
  × Assertion failed.
   ╭─[entry #35:1:1]
 1 │ assert ($b | str contains $a)
   ·              ──────┬─────
   ·                    ╰── It is not true.
   ╰────
```

While with using `assert str contains`:

```
❯ std assert str contains $b $a
Error:
  × Assertion failed.
   ╭─[entry #34:1:1]
 1 │ assert str contains $b $a
   ·                     ──┬──
   ·                       ╰── 'haystack' does not contain 'a needle'.
   ╰────
```

In general for base `assert` command it is encouraged to always provide the additional message to show what went wrong. If you cannot use any built-in assert command, you can create a custom one with passing the label for [`error make`](error_make.md) for the `assert` command:

```
def "assert even" [number: int] {
    std assert ($number mod 2 == 0) --error-label {
        start: (metadata $number).span.start,
        end: (metadata $number).span.end,
        text: $"($number) is not an even number",
    }
}
```

Then you'll have your detailed custom error message:

```
❯ let $a = 13
❯ assert even $a
Error:
  × Assertion failed.
   ╭─[entry #37:1:1]
 1 │ assert even $a
   ·             ─┬
   ·              ╰── 13 is not an even number
   ╰────
```

## Test modules & test cases

The naming convention for test modules is `test_<your_module>.nu`.

The test case commands must be exported commands with `test_<test name>` naming convention, without any required parameters.

You also can define `setup` and `teardown` methods, which will be executed before and after every test case, even if they are failed or skipped. A context can be created in the setup command, which will be the input (`$in` variable) in the test case and the `teardown` command.

The standard library itself is tested with this framework, so you can find many examples in the [Nushell repository](https://github.com/nushell/nushell/blob/main/crates/nu-std/tests/).

## Setting verbosity

The unit testing framework uses the `log` commands from the standard library to display information, so you can set `NU_LOG_LEVEL` if you want more or less details:

```
❯ std run-tests
❯ NU_LOG_LEVEL=DEBUG std run-tests
❯ NU_LOG_LEVEL=WARNING std run-tests
```
