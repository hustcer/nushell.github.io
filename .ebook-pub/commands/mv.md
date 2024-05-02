# mv

**version**: 0.93.0

## **usage**:

Move files or directories using uutils/coreutils mv.

## Signature

`> mv ...rest --force --verbose --progress --interactive --no-clobber`

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
> mv before.txt after.txt
```

Move a file into a directory

```bash
> mv test.txt my/subdirectory
```

Move many files into a directory

```bash
> mv *.txt my/subdirectory
```
