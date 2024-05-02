# save

**version**: 0.93.0

## **usage**:

Save a file.

## Signature

`> save (filename) --stderr --raw --append --force --progress`

## Parameters

- `filename`: The filename to use.
- `--stderr {path}`: the filename used to save stderr, only works with `-r` flag
- `--raw`: save file as raw binary
- `--append`: append input to the end of the file
- `--force`: overwrite the destination
- `--progress`: enable progress bar

## Input/output types:

| input | output  |
| ----- | ------- |
| any   | nothing |

## Examples

Save a string to foo.txt in the current directory

```bash
> 'save me' | save foo.txt
```

Append a string to the end of foo.txt

```bash
> 'append me' | save --append foo.txt
```

Save a record to foo.json in the current directory

```bash
> { a: 1, b: 2 } | save foo.json
```

Save a running program's stderr to foo.txt

```bash
> do -i {} | save foo.txt --stderr foo.txt
```

Save a running program's stderr to separate file

```bash
> do -i {} | save foo.txt --stderr bar.txt
```
