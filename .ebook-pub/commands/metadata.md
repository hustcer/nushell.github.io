# metadata

**version**: 0.90.2

## **usage**:

Get the metadata for items in the stream.

## Signature

`> metadata (expression)`

## Parameters

- `expression`: The expression you want metadata for.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | record |

## Examples

Get the metadata of a variable

```bash
> let a = 42; metadata $a
```

Get the metadata of the input

```bash
> ls | metadata
```
