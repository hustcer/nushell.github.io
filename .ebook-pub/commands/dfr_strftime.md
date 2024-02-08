# dfr strftime

**version**: 0.90.2

## **usage**:

Formats date based on string rule.

## Signature

`> dfr strftime (fmt)`

## Parameters

- `fmt`: Format rule

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Formats date

```bash
> let dt = ('2020-08-04T16:39:18+00:00' | into datetime --timezone 'UTC');
    let df = ([$dt $dt] | dfr into-df);
    $df | dfr strftime "%Y/%m/%d"
```
