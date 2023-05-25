# mv

**version**: 0.80.0

## **usage**:

Move files or directories.

## Signature

`> mv (source) (destination) --verbose --force --interactive`

## Parameters

- `source`: the location to move files/directories from
- `destination`: the location to move files/directories to
- `--verbose`: make mv to be verbose, showing files been moved.
- `--force`: overwrite the destination.
- `--interactive`: ask user to confirm action

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
