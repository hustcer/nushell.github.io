# values

**version**: 0.93.0

## **usage**:

Given a record or table, produce a list of its columns' values.

## Signature

`> values `

## Input/output types:

| input  | output      |
| ------ | ----------- |
| record | list\<any\> |
| table  | list\<any\> |

## Examples

Get the values from the record (produce a list)

```bash
> { mode:normal userid:31415 } | values
```

Values are ordered by the column order of the record

```bash
> { f:250 g:191 c:128 d:1024 e:2000 a:16 b:32 } | values
```

Get the values from the table (produce a list of lists)

```bash
> [[name meaning]; [ls list] [mv move] [cd 'change directory']] | values
```

## Notes

```text
This is a counterpart to `columns`, which produces a list of columns' names.
```
