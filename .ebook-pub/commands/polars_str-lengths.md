# polars str-lengths

**version**: 0.100.1

## **usage**:

Get lengths of all strings.

## Signature

`> polars str-lengths --bytes`

## Parameters

- `--bytes`: Get the length in bytes instead of chars.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns string lengths for a column

```bash
> [[a]; [a] [ab] [abc]] | polars into-df | polars select (polars col a | polars str-lengths) | polars collect
```

Returns string lengths

```bash
> [a ab abc] | polars into-df | polars str-lengths
```
