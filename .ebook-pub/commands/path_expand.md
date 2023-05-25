# path expand

**version**: 0.80.0

## **usage**:

Try to expand a path to its absolute form.

## Signature

`> path expand --strict --no-symlink --columns`

## Parameters

- `--strict`: Throw an error if the path could not be expanded
- `--no-symlink`: Do not resolve symbolic links
- `--columns {table}`: For a record or table input, expand strings at the given columns

## Examples

Expand an absolute path

```bash
> '/home/joe/foo/../bar' | path expand
```

Expand a path in a column

```bash
> ls | path expand -c [ name ]
```

Expand a relative path

```bash
> 'foo/../bar' | path expand
```
