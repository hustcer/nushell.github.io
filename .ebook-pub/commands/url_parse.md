# url parse

**version**: 0.100.1

## **usage**:

Parses a url.

## Signature

`> url parse ...rest`

## Parameters

- `...rest`: Optionally operate by cell path.

## Input/output types:

| input  | output |
| ------ | ------ |
| record | record |
| string | record |
| table  | table  |

## Examples

Parses a url

```bash
> 'http://user123:pass567@www.example.com:8081/foo/bar?param1=section&p2=&f[name]=vldc&f[no]=42#hello' | url parse
```
