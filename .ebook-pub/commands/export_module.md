# export module

**version**: 0.93.0

## **usage**:

Export a custom module from a module.

## Signature

`> export module (module) (block)`

## Parameters

- `module`: Module name or module path.
- `block`: Body of the module if 'module' parameter is not a path.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Define a custom command in a submodule of a module and call it

```bash
> module spam {
        export module eggs {
            export def foo [] { "foo" }
        }
    }
    use spam eggs
    eggs foo
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
