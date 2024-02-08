# select

**version**: 0.90.2

## **usage**:

Select only these columns or rows from the input. Opposite of `reject`.

## Signature

`> select ...rest --ignore-errors`

## Parameters

- `...rest`: The columns to select from the table.
- `--ignore-errors`: ignore missing data (make all cell path members optional)

## Input/output types:

| input       | output |
| ----------- | ------ |
| list\<any\> | any    |
| record      | record |
| table       | table  |

## Examples

Select a column in a table

```bash
> [{a: a b: b}] | select a
```

Select a field in a record

```bash
> {a: a b: b} | select a
```

Select just the `name` column

```bash
> ls | select name
```

Select the first four rows (this is the same as `first 4`)

```bash
> ls | select 0 1 2 3
```

Select columns by a provided list of columns

```bash
> let cols = [name type];[[name type size]; [Cargo.toml toml 1kb] [Cargo.lock toml 2kb]] | select $cols
```

Select columns by a provided list of columns

```bash
> [[name type size]; [Cargo.toml toml 1kb] [Cargo.lock toml 2kb]] | select ["name", "type"]
```

Select rows by a provided list of rows

```bash
> let rows = [0 2];[[name type size]; [Cargo.toml toml 1kb] [Cargo.lock toml 2kb] [file.json json 3kb]] | select $rows
```

## Notes

```text
This differs from `get` in that, rather than accessing the given value in the data structure,
it removes all non-selected values from the structure. Hence, using `select` on a table will
produce a table, a list will produce a list, and a record will produce a record.
```
