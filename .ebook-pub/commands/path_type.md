# path type

**version**: 0.80.0

## **usage**:

Get the type of the object a path refers to (e.g., file, dir, symlink).

## Signature

`> path type --columns`

## Parameters

- `--columns {table}`: For a record or table input, check strings at the given columns, and replace with result

## Notes

```text
This checks the file system to confirm the path's object type.
If nothing is found, an empty string will be returned.
```

## Examples

Show type of a filepath

```bash
> '.' | path type
```

Show type of a filepath in a column

```bash
> ls | path type -c [ name ]
```
