# dfr get-nanosecond

**version**: 0.80.0

## **usage**:

Gets nanosecond from date.

## Signature

`> dfr get-nanosecond `

## Examples

Returns nanosecond from a date

```bash
> let dt = ('2020-08-04T16:39:18+00:00' | into datetime -z 'UTC');
    let df = ([$dt $dt] | dfr into-df);
    $df | dfr get-nanosecond
```
