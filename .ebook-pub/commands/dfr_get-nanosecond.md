# dfr get-nanosecond

**version**: 0.90.2

## **usage**:

Gets nanosecond from date.

## Signature

`> dfr get-nanosecond `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns nanosecond from a date

```bash
> let dt = ('2020-08-04T16:39:18+00:00' | into datetime --timezone 'UTC');
    let df = ([$dt $dt] | dfr into-df);
    $df | dfr get-nanosecond
```
