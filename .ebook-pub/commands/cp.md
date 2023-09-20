# cp

**version**: 0.85.0

## **usage**:

Copy files.

## Signature

`> cp (source) (destination) --recursive --verbose --update --interactive --no-symlink --progress`

## Parameters

- `source`: the place to copy from
- `destination`: the place to copy to
- `--recursive`: copy recursively through subdirectories
- `--verbose`: show successful copies in addition to failed copies (default:false)
- `--update`: copy only when the SOURCE file is newer than the destination file or when the destination file is missing
- `--interactive`: ask user to confirm action
- `--no-symlink`: no symbolic links are followed, only works if -r is active
- `--progress`: enable progress bar

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
> cp -u a b
```
