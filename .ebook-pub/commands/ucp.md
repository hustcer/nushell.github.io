# ucp

**version**: 0.85.0

## **usage**:

Copy files using uutils/coreutils cp.

## Signature

`> ucp ...rest --recursive --verbose --force --interactive --progress --no-clobber --debug`

## Parameters

- `...rest`: Copy SRC file/s to DEST
- `--recursive`: copy directories recursively
- `--verbose`: explicitly state what is being done
- `--force`: if an existing destination file cannot be opened, remove it and try
  again (this option is ignored when the -n option is also used).
  currently not implemented for windows
- `--interactive`: ask before overwriting files
- `--progress`: display a progress bar
- `--no-clobber`: do not overwrite an existing file
- `--debug`: explain how a file is copied. Implies -v

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Copy myfile to dir_b

```bash
> ucp myfile dir_b
```

Recursively copy dir_a to dir_b

```bash
> ucp -r dir_a dir_b
```

Recursively copy dir_a to dir_b, and print the feedbacks

```bash
> ucp -r -v dir_a dir_b
```

Move many files into a directory

```bash
> ucp *.txt dir_a
```
