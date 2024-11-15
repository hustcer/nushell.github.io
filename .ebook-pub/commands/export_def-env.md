# export def-env

**version**: 0.85.0

## **usage**:

Define a custom command that participates in the environment and export it from a module.

## Signature

`> export def-env (name) (params) (block)`

## Parameters

- `name`: definition name
- `params`: parameters
- `block`: body of the definition

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Define a custom command that participates in the environment in a module and call it

```bash
> module foo { export def-env bar [] { $env.FOO_BAR = "BAZ" } }; use foo bar; bar; $env.FOO_BAR
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html

=== EXTRA NOTE ===
All blocks are scoped, including variable definition and environment variable changes.

Because of this, the following doesn't work:

export def-env cd_with_fallback [arg = ""] {
    let fall_back_path = "/tmp"
    if $arg != "" {
        cd $arg
    } else {
        cd $fall_back_path
    }
}

Instead, you have to use cd in the top level scope:

export def-env cd_with_fallback [arg = ""] {
    let fall_back_path = "/tmp"
    let path = if $arg != "" {
        $arg
    } else {
        $fall_back_path
    }
    cd $path
}
```
