# def

**version**: 0.85.0

## **usage**:

Define a custom command.

## Signature

`> def (def_name) (params) (body)`

## Parameters

- `def_name`: definition name
- `params`: parameters
- `body`: body of the definition

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Define a command and run it

```bash
> def say-hi [] { echo 'hi' }; say-hi
```

Define a command and run it with parameter(s)

```bash
> def say-sth [sth: string] { echo $sth }; say-sth hi
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
