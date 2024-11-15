# source

**version**: 0.100.1

## **usage**:

Runs a script file in the current context.

## Signature

`> source (filename)`

## Parameters

- `filename`: The filepath to the script file to source.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Runs foo.nu in the current context

```bash
> source foo.nu
```

Runs foo.nu in current context and call the command defined, suppose foo.nu has content: `def say-hi [] { echo 'Hi!' }`

```bash
> source ./foo.nu; say-hi
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
