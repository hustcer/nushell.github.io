# cp

**version**: 0.100.1

## **usage**:

Copy files using uutils/coreutils cp.

## Signature

`> cp ...rest --recursive --verbose --force --interactive --update --progress --no-clobber --preserve --debug`

## Parameters

- `...rest`: Copy SRC file/s to DEST.
- `--recursive`: copy directories recursively
- `--verbose`: explicitly state what is being done
- `--force`: if an existing destination file cannot be opened, remove it and try
  again (this option is ignored when the -n option is also used).
  currently not implemented for windows
- `--interactive`: ask before overwriting files
- `--update`: copy only when the SOURCE file is newer than the destination file or when the destination file is missing
- `--progress`: display a progress bar
- `--no-clobber`: do not overwrite an existing file
- `--preserve {list<string>}`: preserve only the specified attributes (empty list means no attributes preserved)
  if not specified only mode is preserved
  possible values: mode, ownership (unix only), timestamps, context, link, links, xattr
- `--debug`: explain how a file is copied. Implies -v

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Copy myfile to dir_b

```bash
> cp myfile dir_b
```

Recursively copy dir_a to dir_b

```bash
> cp -r dir_a dir_b
```

Recursively copy dir_a to dir_b, and print the feedbacks

```bash
> cp -r -v dir_a dir_b
```

Move many files into a directory

```bash
> cp *.txt dir_a
```

Copy only if source file is newer than target file

```bash
> cp -u myfile newfile
```

Copy file preserving mode and timestamps attributes

```bash
> cp --preserve [ mode timestamps ] myfile newfile
```

Copy file erasing all attributes

```bash
> cp --preserve [] myfile newfile
```

Copy file to a directory three levels above its current location

```bash
> cp myfile ....
```
