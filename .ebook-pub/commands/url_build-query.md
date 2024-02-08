# url build-query

**version**: 0.90.2

## **usage**:

Converts record or table into query string applying percent-encoding.

## Signature

`> url build-query `

## Input/output types:

| input  | output |
| ------ | ------ |
| record | string |
| table  | string |

## Examples

Outputs a query string representing the contents of this record

```bash
> { mode:normal userid:31415 } | url build-query
```

Outputs a query string representing the contents of this 1-row table

```bash
> [[foo bar]; ["1" "2"]] | url build-query
```

Outputs a query string representing the contents of this record

```bash
> {a:"AT&T", b: "AT T"} | url build-query
```
