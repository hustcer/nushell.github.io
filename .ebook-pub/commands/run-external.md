# run-external

**version**: 0.100.1

## **usage**:

Runs external command.

## Signature

`> run-external (command) ...rest`

## Parameters

- `command`: External command to run.
- `...rest`: Arguments for external command.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Run an external command

```bash
> run-external "echo" "-n" "hello"
```

Redirect stdout from an external command into the pipeline

```bash
> run-external "echo" "-n" "hello" | split chars
```

Redirect stderr from an external command into the pipeline

```bash
> run-external "nu" "-c" "print -e hello" e>| split chars
```
