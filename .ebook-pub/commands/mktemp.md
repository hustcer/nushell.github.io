# mktemp

**version**: 0.93.0

## **usage**:

Create temporary files or directories using uutils/coreutils mktemp.

## Signature

`> mktemp (template) --suffix --tmpdir-path --tmpdir --directory`

## Parameters

- `template`: Optional pattern from which the name of the file or directory is derived. Must contain at least three 'X's in last component.
- `--suffix {string}`: Append suffix to template; must not contain a slash.
- `--tmpdir-path {path}`: Interpret TEMPLATE relative to tmpdir-path. If tmpdir-path is not set use $TMPDIR
- `--tmpdir`: Interpret TEMPLATE relative to the system temporary directory.
- `--directory`: Create a directory instead of a file.

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Examples

Make a temporary file with the given suffix in the current working directory.

```bash
> mktemp --suffix .txt
```

Make a temporary file named testfile.XXX with the 'X's as random characters in the current working directory.

```bash
> mktemp testfile.XXX
```

Make a temporary file with a template in the system temp directory.

```bash
> mktemp -t testfile.XXX
```

Make a temporary directory with randomly generated name in the temporary directory.

```bash
> mktemp -d
```
