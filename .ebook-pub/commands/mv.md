# mv

**version**: 0.90.2

## **usage**:

Move files or directories.

## Signature

`> mv (source) (destination) --verbose --force --interactive --update`

## Parameters

- `source`: The location to move files/directories from.
- `destination`: The location to move files/directories to.
- `--verbose`: make mv to be verbose, showing files been moved.
- `--force`: overwrite the destination.
- `--interactive`: ask user to confirm action
- `--update`: move only when the SOURCE file is newer than the destination file(with -f) or when the destination file is missing

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
