# reject

**version**: 0.100.1

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

Reject multiple rows

```bash
> [[name type size]; [Cargo.toml toml 1kb] [Cargo.lock toml 2kb] [file.json json 3kb]] | reject 0 2
```

Reject multiple columns

```bash
> [[name type size]; [Cargo.toml toml 1kb] [Cargo.lock toml 2kb]] | reject type size
```

Reject multiple columns by spreading a list

```bash
> let cols = [type size]; [[name type size]; [Cargo.toml toml 1kb] [Cargo.lock toml 2kb]] | reject ...$cols
```

## Notes

```text
To remove a quantity of rows or columns, use `skip`, `drop`, or `drop column`.
```
