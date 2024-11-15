# polars strftime

**version**: 0.100.1

## **usage**:

Formats date based on string rule.

## Signature

`> polars strftime (fmt)`

## Parameters

- `fmt`: Format rule

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Formats date column as a string

```bash
> let date = '2020-08-04T16:39:18+00:00' | into datetime --timezone 'UTC';
    let df = ([[a]; [$date]] | polars into-df);
    let df2 = $df | polars with-column [(polars col a | polars strftime "%Y/%m/%d" | polars as b)] | polars collect;
    $df2.b
```

Formats date

```bash
> let dt = ('2020-08-04T16:39:18+00:00' | into datetime --timezone 'UTC');
    let df = ([$dt $dt] | polars into-df);
    $df | polars strftime "%Y/%m/%d"
```
