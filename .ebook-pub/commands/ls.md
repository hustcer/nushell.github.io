# ls

**version**: 0.80.0

## **usage**:

List the filenames, sizes, and modification times of items in a directory.

## Signature

`> ls (pattern) --all --long --short-names --full-paths --du --directory --mime-type`

## Parameters

- `pattern`: the glob pattern to use
- `--all`: Show hidden files
- `--long`: Get all available columns for each entry (slower; columns are platform-dependent)
- `--short-names`: Only print the file names, and not the path
- `--full-paths`: display paths as absolute paths
- `--du`: Display the apparent directory size ("disk usage") in place of the directory metadata size
- `--directory`: List the specified directory itself instead of its contents
- `--mime-type`: Show mime-type in type column instead of 'file' (based on filenames only; files' contents are not examined)

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
> ls -s | where name !~ bar
```

List all dirs in your home directory

```bash
> ls -a ~ | where type == dir
```

List all dirs in your home directory which have not been modified in 7 days

```bash
> ls -as ~ | where type == dir and modified < ((date now) - 7day)
```

List given paths and show directories themselves

```bash
> ['/path/to/directory' '/path/to/file'] | each {|| ls -D $in } | flatten
```
