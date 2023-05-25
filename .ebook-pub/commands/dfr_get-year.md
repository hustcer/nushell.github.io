# dfr get-year

**version**: 0.80.0

## **usage**:

Gets year from date.

## Signature

`> dfr get-year `

## Examples

Returns year from a date

```bash
> let dt = ('2020-08-04T16:39:18+00:00' | into datetime -z 'UTC');
    let df = ([$dt $dt] | dfr into-df);
    $df | dfr get-year
```
