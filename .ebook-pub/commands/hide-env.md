# hide-env

**version**: 0.80.0

## **usage**:

Hide environment variables in the current scope.

## Signature

`> hide-env ...rest --ignore-errors`

## Parameters

- `...rest`: environment variable names to hide
- `--ignore-errors`: do not throw an error if an environment variable was not found

## Examples

Hide an environment variable

```bash
> let-env HZ_ENV_ABC = 1; hide-env HZ_ENV_ABC; 'HZ_ENV_ABC' in (env).name
```
