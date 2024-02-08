# umv

**version**: 0.90.2

## **usage**:

Move files or directories.

## Signature

`> umv ...rest --force --verbose --progress --interactive --no-clobber`

## Parameters

- `...rest`: Rename SRC to DST, or move SRC to DIR.
- `--force`: do not prompt before overwriting
- `--verbose`: explain what is being done.
- `--progress`: display a progress bar
- `--interactive`: prompt before overwriting
- `--no-clobber`: do not overwrite an existing file

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Rename a file

```bash
> umv before.txt after.txt
```

Move a file into a directory

```bash
> umv test.txt my/subdirectory
```

Move many files into a directory

```bash
> umv *.txt my/subdirectory
```
