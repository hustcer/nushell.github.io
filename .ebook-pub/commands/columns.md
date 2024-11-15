# columns

**version**: 0.100.1

## **usage**:

Given a record or table, produce a list of its columns' names.

## Signature

`> columns `

## Input/output types:

| input  | output         |
| ------ | -------------- |
| record | list\<string\> |
| table  | list\<string\> |

## Examples

Get the columns from the record

```bash
> { acronym:PWD, meaning:'Print Working Directory' } | columns
```

Get the columns from the table

```bash
> [[name,age,grade]; [bill,20,a]] | columns
```

Get the first column from the table

```bash
> [[name,age,grade]; [bill,20,a]] | columns | first
```

Get the second column from the table

```bash
> [[name,age,grade]; [bill,20,a]] | columns | select 1
```

## Notes

```text
This is a counterpart to `values`, which produces a list of columns' values.
```
