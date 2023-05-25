# url parse

**version**: 0.80.0

## **usage**:

Parses a url.

## Signature

`> url parse ...rest`

## Parameters

- `...rest`: optionally operate by cell path

## Examples

Parses a url

```bash
> 'http://user123:pass567@www.example.com:8081/foo/bar?param1=section&p2=&f[name]=vldc#hello' | url parse
```
