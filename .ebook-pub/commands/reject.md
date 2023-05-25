# reject

**version**: 0.80.0

## **usage**:

Remove the given columns or rows from the table. Opposite of `select`.

## Signature

`> reject ...rest`

## Parameters

- `...rest`: the names of columns to remove from the table

## Notes

```text
To remove a quantity of rows or columns, use `skip`, `drop`, or `drop column`.
```

## Examples

Reject a column in the `ls` table

```bash
> ls | reject modified
```

Reject a column in a table

```bash
> [[a, b]; [1, 2]] | reject a
```

Reject the specified field in a record

```bash
> {a: 1, b: 2} | reject a
```

Reject a nested field in a record

```bash
> {a: {b: 3, c: 5}} | reject a.b
```
