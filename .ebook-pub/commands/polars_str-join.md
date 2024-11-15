# polars str-join

**version**: 0.100.1

## **usage**:

Concatenates strings within a column or dataframes

## Signature

`> polars str-join (other) --delimiter --ignore-nulls`

## Parameters

- `other`: Other dataframe with a single series of strings to be concatenated. Required when used with a dataframe, ignored when used as an expression.
- `--delimiter {string}`: Delimiter to join strings within an expression. Other dataframe when used with a dataframe.
- `--ignore-nulls`: Ignore null values. Only available when used as an expression.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Join strings in a column

```bash
> [[a]; [abc] [abc] [abc]] | polars into-df | polars select (polars col a | polars str-join -d ',') | polars collect
```

StrJoin strings across two series

```bash
> let other = ([za xs cd] | polars into-df);
    [abc abc abc] | polars into-df | polars str-join $other
```
