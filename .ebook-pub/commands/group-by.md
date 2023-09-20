# group-by

**version**: 0.85.0

## **usage**:

Splits a list or table into groups, and returns a record containing those groups.

## Signature

`> group-by (grouper)`

## Parameters

- `grouper`: the path to the column to group on

## Input/output types:

| input       | output |
| ----------- | ------ |
| list\<any\> | record |

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
