# cp

**version**: 0.80.0

## **usage**:

Copy files.

## Signature

`> cp (source) (destination) --recursive --verbose --interactive --no-symlink --progress`

## Parameters

- `source`: the place to copy from
- `destination`: the place to copy to
- `--recursive`: copy recursively through subdirectories
- `--verbose`: show successful copies in addition to failed copies (default:false)
- `--interactive`: ask user to confirm action
- `--no-symlink`: no symbolic links are followed, only works if -r is active
- `--progress`: enable progress bar

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
