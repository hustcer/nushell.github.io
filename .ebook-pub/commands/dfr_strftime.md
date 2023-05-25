# dfr strftime

**version**: 0.80.0

## **usage**:

Formats date based on string rule.

## Signature

`> dfr strftime (fmt)`

## Parameters

- `fmt`: Format rule

## Examples

Formats date

```bash
> let dt = ('2020-08-04T16:39:18+00:00' | into datetime -z 'UTC');
    let df = ([$dt $dt] | dfr into-df);
    $df | dfr strftime "%Y/%m/%d"
```
