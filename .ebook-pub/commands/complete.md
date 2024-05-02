# complete

**version**: 0.93.0

## **usage**:

Capture the outputs and exit code from an external piped in command in a nushell table.

## Signature

`> complete `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | record |

## Examples

Run the external command to completion, capturing stdout, stderr, and exit_code

```bash
> ^external arg1 | complete
```

## Notes

```text
In order to capture stdout, stderr, and exit_code, externally piped in commands need to be wrapped with `do`
```
