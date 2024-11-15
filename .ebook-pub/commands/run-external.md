# run-external

**version**: 0.80.0

## **usage**:

Runs external command.

## Signature

`> run-external (command) ...rest --redirect-stdout --redirect-stderr --redirect-combine --trim-end-newline`

## Parameters

- `command`: external command to run
- `...rest`: arguments for external command
- `--redirect-stdout`: redirect stdout to the pipeline
- `--redirect-stderr`: redirect stderr to the pipeline
- `--redirect-combine`: redirect both stdout and stderr combined to the pipeline (collected in stdout)
- `--trim-end-newline`: trimming end newlines

## Examples

Run an external command

```bash
> run-external "echo" "-n" "hello"
```

Redirect stdout from an external command into the pipeline

```bash
> run-external --redirect-stdout "echo" "-n" "hello" | split chars
```
