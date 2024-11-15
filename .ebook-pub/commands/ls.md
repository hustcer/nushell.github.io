# ls

**version**: 0.100.1

## **usage**:

List the filenames, sizes, and modification times of items in a directory.

## Signature

`> ls ...rest --all --long --short-names --full-paths --du --directory --mime-type --threads`

## Parameters

- `...rest`: The glob pattern to use.
- `--all`: Show hidden files
- `--long`: Get all available columns for each entry (slower; columns are platform-dependent)
- `--short-names`: Only print the file names, and not the path
- `--full-paths`: display paths as absolute paths
- `--du`: Display the apparent directory size ("disk usage") in place of the directory metadata size
- `--directory`: List the specified directory itself instead of its contents
- `--mime-type`: Show mime-type in type column instead of 'file' (based on filenames only; files' contents are not examined)
- `--threads`: Use multiple threads to list contents. Output will be non-deterministic.

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

List visible files in the current directory

```bash
> ls
```

List visible files in a subdirectory

```bash
> ls subdir
```

List visible files with full path in the parent directory

```bash
> ls -f ..
```

List Rust files

```bash
> ls *.rs
```

List files and directories whose name do not contain 'bar'

```bash
> ls | where name !~ bar
```

List the full path of all dirs in your home directory

```bash
> ls -a ~ | where type == dir
```

List only the names (not paths) of all dirs in your home directory which have not been modified in 7 days

```bash
> ls -as ~ | where type == dir and modified < ((date now) - 7day)
```

Recursively list all files and subdirectories under the current directory using a glob pattern

```bash
> ls -a **/*
```

Recursively list _.rs and _.toml files using the glob command

```bash
> ls ...(glob **/*.{rs,toml})
```

List given paths and show directories themselves

```bash
> ['/path/to/directory' '/path/to/file'] | each {|| ls -D $in } | flatten
```
