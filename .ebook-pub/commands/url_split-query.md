# url split-query

**version**: 0.100.1

## **usage**:

Converts query string into table applying percent-decoding.

## Signature

`> url split-query `

## Input/output types:

| input  | output                              |
| ------ | ----------------------------------- |
| string | table\<key: string, value: string\> |

## Examples

Outputs a table representing the contents of this query string

```bash
> "mode=normal&userid=31415" | url split-query
```

Outputs a table representing the contents of this query string, url-decoding the values

```bash
> "a=AT%26T&b=AT+T" | url split-query
```

Outputs a table representing the contents of this query string

```bash
> "a=one&a=two&b=three" | url split-query
```
