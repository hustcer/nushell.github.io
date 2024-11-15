# url build-query

**version**: 0.100.1

## **usage**:

Converts record or table into query string applying percent-encoding.

## Signature

`> url build-query `

## Input/output types:

| input                         | output |
| ----------------------------- | ------ |
| record                        | string |
| table\<key: any, value: any\> | string |

## Examples

Outputs a query string representing the contents of this record

```bash
> { mode:normal userid:31415 } | url build-query
```

Outputs a query string representing the contents of this record, with a value that needs to be url-encoded

```bash
> {a:"AT&T", b: "AT T"} | url build-query
```

Outputs a query string representing the contents of this record, "exploding" the list into multiple parameters

```bash
> {a: ["one", "two"], b: "three"} | url build-query
```

Outputs a query string representing the contents of this table containing key-value pairs

```bash
> [[key, value]; [a, one], [a, two], [b, three], [a, four]] | url build-query
```
