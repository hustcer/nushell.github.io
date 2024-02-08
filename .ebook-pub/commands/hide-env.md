# hide-env

**version**: 0.90.2

## **usage**:

Hide environment variables in the current scope.

## Signature

`> hide-env ...rest --ignore-errors`

## Parameters

- `...rest`: Environment variable names to hide.
- `--ignore-errors`: do not throw an error if an environment variable was not found

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Hide an environment variable

```bash
> $env.HZ_ENV_ABC = 1; hide-env HZ_ENV_ABC; 'HZ_ENV_ABC' in (env).name
```
