# export def

**version**: 0.100.1

## **usage**:

Define a custom command and export it from a module.

## Signature

`> export def (def_name) (params) (block) --env --wrapped`

## Parameters

- `def_name`: Command name.
- `params`: Parameters.
- `block`: Body of the definition.
- `--env`: keep the environment defined inside the command
- `--wrapped`: treat unknown flags and arguments as strings (requires ...rest-like parameter in signature)

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Define a custom command in a module and call it

```bash
> module spam { export def foo [] { "foo" } }; use spam foo; foo
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
