# export-env

**version**: 0.100.1

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

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
