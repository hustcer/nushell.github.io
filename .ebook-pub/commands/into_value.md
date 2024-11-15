# into value

**version**: 0.100.1

## **usage**:

Infer Nushell datatype for each cell.

## Signature

`> into value --columns --prefer-filesizes`

## Parameters

- `--columns {list<any>}`: list of columns to update
- `--prefer-filesizes`: For ints display them as human-readable file sizes

## Input/output types:

| input | output |
| ----- | ------ |
| table | table  |

## Examples

Infer Nushell values for each cell.

```bash
> $table | into value
```

Infer Nushell values for each cell in the given columns.

```bash
> $table | into value -c [column1, column5]
```
