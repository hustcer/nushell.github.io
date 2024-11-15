# source-env

**version**: 0.100.1

## **usage**:

Source the environment from a source file into the current environment.

## Signature

`> source-env (filename)`

## Parameters

- `filename`: The filepath to the script file to source the environment from.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Sources the environment from foo.nu in the current context

```bash
> source-env foo.nu
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
