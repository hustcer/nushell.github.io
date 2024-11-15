# metadata access

**version**: 0.100.1

## **usage**:

Access the metadata for the input stream within a closure.

## Signature

`> metadata access (closure)`

## Parameters

- `closure`: The closure to run with metadata access.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Access metadata and data from a stream together

```bash
> {foo: bar} | to json --raw | metadata access {|meta| {in: $in, meta: $meta}}
```
