# export-env

**version**: 0.80.0

## **usage**:

Run a block and preserve its environment in a current scope.

## Signature

`> export-env (block)`

## Parameters

- `block`: the block to run to set the environment

## Examples

Set an environment variable

```bash
> export-env { let-env SPAM = 'eggs' }
```

Set an environment variable and examine its value

```bash
> export-env { let-env SPAM = 'eggs' }; $env.SPAM
```
