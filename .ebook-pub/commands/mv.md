# mv

**version**: 0.100.1

## **usage**:

Move files or directories using uutils/coreutils mv.

## Signature

`> mv ...rest --force --verbose --progress --interactive --update --no-clobber`

## Parameters

- `...rest`: Rename SRC to DST, or move SRC to DIR.
- `--force`: do not prompt before overwriting
- `--verbose`: explain what is being done.
- `--progress`: display a progress bar
- `--interactive`: prompt before overwriting
- `--update`: move and overwrite only when the SOURCE file is newer than the destination file or when the destination file is missing
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

Move only if source file is newer than target file

```bash
> mv -u new/test.txt old/
```

Move many files into a directory

```bash
> mv *.txt my/subdirectory
```

Move a file into the "my" directory two levels up in the directory tree

```bash
> mv test.txt .../my/
```
