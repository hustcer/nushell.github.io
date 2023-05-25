# path split

**version**: 0.80.0

## **usage**:

Split a path into a list based on the system's path separator.

## Signature

`> path split --columns`

## Parameters

- `--columns {table}`: For a record or table input, split strings at the given columns

## Examples

Split a path into parts

```bash
> '/home/viking/spam.txt' | path split
```

Split all paths under the 'name' column

```bash
> ls ('.' | path expand) | path split -c [ name ]
```
