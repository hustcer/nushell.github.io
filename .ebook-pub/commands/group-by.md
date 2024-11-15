# group-by

**version**: 0.100.1

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

Group bools, whether they are strings or actual bools

```bash
> [true "true" false "false"] | group-by
```

## Notes

```text
the group-by command makes some assumptions:
    - if the input data is not a string, the grouper will convert the key to string but the values will remain in their original format. e.g. with bools, "true" and true would be in the same group (see example).
    - datetime is formatted based on your configuration setting. use `format date` to change the format.
    - filesize is formatted based on your configuration setting. use `format filesize` to change the format.
    - some nushell values are not supported, such as closures.
```
