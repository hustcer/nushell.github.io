# path relative-to

**version**: 0.80.0

## **usage**:

Express a path as relative to another path.

## Signature

`> path relative-to (path) --columns`

## Parameters

- `path`: Parent shared with the input path
- `--columns {table}`: For a record or table input, convert strings at the given columns

## Notes

```text
Can be used only when the input and the argument paths are either both
absolute or both relative. The argument path needs to be a parent of the input
path.
```

## Examples

Find a relative path from two absolute paths

```bash
> '/home/viking' | path relative-to '/home'
```

Find a relative path from two absolute paths in a column

```bash
> ls ~ | path relative-to ~ -c [ name ]
```

Find a relative path from two relative paths

```bash
> 'eggs/bacon/sausage/spam' | path relative-to 'eggs/bacon/sausage'
```
