# export use

**version**: 0.90.2

## **usage**:

Use definitions from a module and export them from this module.

## Signature

`> export use (module) (members)`

## Parameters

- `module`: Module or module file.
- `members`: Which members of the module to import.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Re-export a command from another module

```bash
> module spam { export def foo [] { "foo" } }
    module eggs { export use spam foo }
    use eggs foo
    foo

```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
