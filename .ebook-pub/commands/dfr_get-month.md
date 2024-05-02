# dfr get-month

**version**: 0.93.0

## **usage**:

Gets month from date.

## Signature

`> dfr get-month `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns month from a date

```bash
> let dt = ('2020-08-04T16:39:18+00:00' | into datetime --timezone 'UTC');
    let df = ([$dt $dt] | dfr into-df);
    $df | dfr get-month
```
