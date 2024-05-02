# dfr concat-str

**version**: 0.93.0

## **usage**:

Creates a concat string expression.

## Signature

`> dfr concat-str (separator) (concat expressions)`

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
> let df = ([[a b c]; [one two 1] [three four 2]] | dfr into-df);
    $df | dfr with-column ((dfr concat-str "-" [(dfr col a) (dfr col b) ((dfr col c) * 2)]) | dfr as concat)
```
