# group-by

**version**: 0.93.0

## **usage**:

Splits a list or table into groups, and returns a record containing those groups.

## Signature

`> group-by (grouper) --to-table`

## Parameters

- `grouper`: The path to the column to group on.
- `--to-table`: Return a table with "groups" and "items" columns

## Input/output types:

| input       | output |
| ----------- | ------ |
| list\<any\> | any    |

## Examples

Group items by the "type" column's values

```bash
> ls | group-by type
```

Group items by the "foo" column's values, ignoring records without a "foo" column

```bash
> open cool.json | group-by foo?
```

Group using a block which is evaluated against each input value

```bash
> [foo.txt bar.csv baz.txt] | group-by { path parse | get extension }
```

You can also group by raw values by leaving out the argument

```bash
> ['1' '3' '1' '3' '2' '1' '1'] | group-by
```

You can also output a table instead of a record

```bash
> ['1' '3' '1' '3' '2' '1' '1'] | group-by --to-table
```
