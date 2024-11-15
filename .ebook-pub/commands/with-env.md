# with-env

**version**: 0.100.1

## **usage**:

Runs a block with an environment variable set.

## Signature

`> with-env (variable) (block)`

## Parameters

- `variable`: The environment variable to temporarily set.
- `block`: The block to run once the variable is set.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Set by key-value record

```bash
> with-env {X: "Y", W: "Z"} { [$env.X $env.W] }
```
