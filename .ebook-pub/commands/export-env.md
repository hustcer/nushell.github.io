# export-env

**version**: 0.93.0

## **usage**:

Run a block and preserve its environment in a current scope.

## Signature

`> export-env (block)`

## Parameters

- `block`: The block to run to set the environment.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Set an environment variable

```bash
> export-env { $env.SPAM = 'eggs' }
```

Set an environment variable and examine its value

```bash
> export-env { $env.SPAM = 'eggs' }; $env.SPAM
```
