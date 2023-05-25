# path exists

**version**: 0.80.0

## **usage**:

Check whether a path exists.

## Signature

`> path exists --columns`

## Parameters

- `--columns {table}`: For a record or table input, check strings at the given columns, and replace with result

## Notes

```text
This only checks if it is possible to either `open` or `cd` to the given path.
If you need to distinguish dirs and files, please use `path type`.
```

## Examples

Check if a file exists

```bash
> '/home/joe/todo.txt' | path exists
```

Check if a file exists in a column

```bash
> ls | path exists -c [ name ]
```
