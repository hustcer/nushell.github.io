# overlay use

**version**: 0.90.2

## **usage**:

Use definitions from a module as an overlay.

## Signature

`> overlay use (name) (as) --prefix --reload`

## Parameters

- `name`: Module name to use overlay for.
- `as`: `as` keyword followed by a new name.
- `--prefix`: Prepend module name to the imported commands and aliases
- `--reload`: If the overlay already exists, reload its definitions and environment.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Create an overlay from a module

```bash
> module spam { export def foo [] { "foo" } }
    overlay use spam
    foo
```

Create an overlay from a module and rename it

```bash
> module spam { export def foo [] { "foo" } }
    overlay use spam as spam_new
    foo
```

Create an overlay with a prefix

```bash
> 'export def foo { "foo" }'
    overlay use --prefix spam
    spam foo
```

Create an overlay from a file

```bash
> 'export-env { $env.FOO = "foo" }' | save spam.nu
    overlay use spam.nu
    $env.FOO
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
