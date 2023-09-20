# source-env

**version**: 0.85.0

## **usage**:

Source the environment from a source file into the current environment.

## Signature

`> source-env (filename)`

## Parameters

- `filename`: the filepath to the script file to source the environment from

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Sources the environment from foo.nu in the current context

```bash
> source-env foo.nu
```
