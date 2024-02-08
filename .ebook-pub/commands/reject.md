# reject

**version**: 0.90.2

## **usage**:

Remove the given columns or rows from the table. Opposite of `select`.

## Signature

`> reject ...rest --ignore-errors`

## Parameters

- `...rest`: The names of columns to remove from the table.
- `--ignore-errors`: ignore missing data (make all cell path members optional)

## Input/output types:

| input  | output |
| ------ | ------ |
| record | record |
| table  | table  |

## Examples

Reject a column in the `ls` table

```bash
> ls | reject modified
```

Reject a column in a table

```bash
> [[a, b]; [1, 2]] | reject a
```

Reject a row in a table

```bash
> [[a, b]; [1, 2] [3, 4]] | reject 1
```

Reject the specified field in a record

```bash
> {a: 1, b: 2} | reject a
```

Reject a nested field in a record

```bash
> {a: {b: 3, c: 5}} | reject a.b
```

Reject columns by a provided list of columns

```bash
> let cols = [size type];[[name type size]; [Cargo.toml toml 1kb] [Cargo.lock toml 2kb]] | reject $cols
```

Reject columns by a list of columns directly

```bash
> [[name type size]; [Cargo.toml toml 1kb] [Cargo.lock toml 2kb]] | reject ["size", "type"]
```

Reject rows by a provided list of rows

```bash
> let rows = [0 2];[[name type size]; [Cargo.toml toml 1kb] [Cargo.lock toml 2kb] [file.json json 3kb]] | reject $rows
```

## Notes

```text
To remove a quantity of rows or columns, use `skip`, `drop`, or `drop column`.
```
