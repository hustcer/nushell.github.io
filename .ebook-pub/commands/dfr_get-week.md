# dfr get-week

**version**: 0.80.0

## **usage**:

Gets week from date.

## Signature

`> dfr get-week `

## Examples

Returns week from a date

```bash
> let dt = ('2020-08-04T16:39:18+00:00' | into datetime -z 'UTC');
    let df = ([$dt $dt] | dfr into-df);
    $df | dfr get-week
```
