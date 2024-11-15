# polars concat-str

**version**: 0.100.1

## **usage**:

Creates a concat string expression.

## Signature

`> polars concat-str (separator) (concat expressions)`

## Parameters

- `separator`: Separator used during the concatenation
- `concat expressions`: Expression(s) that define the string concatenation

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Creates a concat string expression

```bash
> let df = ([[a b c]; [one two 1] [three four 2]] | polars into-df);
    $df | polars with-column ((polars concat-str "-" [(polars col a) (polars col b) ((polars col c) * 2)]) | polars as concat)
```
