# group-by

**version**: 0.80.0

## **usage**:

Splits a list or table into groups, and returns a record containing those groups.

## Signature

`> group-by (grouper)`

## Parameters

- `grouper`: the grouper value to use

## Examples

Group items by the "type" column's values

```bash
> ls | group-by type
```

You can also group by raw values by leaving out the argument

```bash
> ['1' '3' '1' '3' '2' '1' '1'] | group-by
```
