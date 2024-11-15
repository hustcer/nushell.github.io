# glob

**version**: 0.100.1

## **usage**:

Creates a list of files and/or folders based on the glob pattern provided.

## Signature

`> glob (glob) --depth --no-dir --no-file --no-symlink --exclude`

## Parameters

- `glob`: The glob expression.
- `--depth {int}`: directory depth to search
- `--no-dir`: Whether to filter out directories from the returned paths
- `--no-file`: Whether to filter out files from the returned paths
- `--no-symlink`: Whether to filter out symlinks from the returned paths
- `--exclude {list<string>}`: Patterns to exclude from the search: `glob` will not walk the inside of directories matching the excluded patterns.

## Input/output types:

| input   | output         |
| ------- | -------------- |
| nothing | list\<string\> |

## Examples

Search for \*.rs files

```bash
> glob *.rs
```

Search for _.rs and _.toml files recursively up to 2 folders deep

```bash
> glob **/*.{rs,toml} --depth 2
```

Search for files and folders that begin with uppercase C or lowercase c

```bash
> glob "[Cc]*"
```

Search for files and folders like abc or xyz substituting a character for ?

```bash
> glob "{a?c,x?z}"
```

A case-insensitive search for files and folders that begin with c

```bash
> glob "(?i)c*"
```

Search for files for folders that do not begin with c, C, b, M, or s

```bash
> glob "[!cCbMs]*"
```

Search for files or folders with 3 a's in a row in the name

```bash
> glob <a*:3>
```

Search for files or folders with only a, b, c, or d in the file name between 1 and 10 times

```bash
> glob <[a-d]:1,10>
```

Search for folders that begin with an uppercase ASCII letter, ignoring files and symlinks

```bash
> glob "[A-Z]*" --no-file --no-symlink
```

Search for files named tsconfig.json that are not in node_modules directories

```bash
> glob **/tsconfig.json --exclude [**/node_modules/**]
```

Search for all files that are not in the target nor .git directories

```bash
> glob **/* --exclude [**/target/** **/.git/** */]
```

## Notes

```text
For more glob pattern help, please refer to https://docs.rs/crate/wax/latest
```
