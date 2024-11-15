# polars get-day

**version**: 0.100.1

## **usage**:

Gets day from date.

## Signature

`> polars get-day `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns day from a date

```bash
> let dt = ('2020-08-04T16:39:18+00:00' | into datetime --timezone 'UTC');
    let df = ([$dt $dt] | polars into-df);
    $df | polars get-day
```
