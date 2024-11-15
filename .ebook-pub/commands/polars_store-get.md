# polars store-get

**version**: 0.100.1

## **usage**:

Gets a Dataframe or other object from the plugin cache.

## Signature

`> polars store-get (key)`

## Parameters

- `key`: Key of objects to get

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Get a stored object

```bash
> let df = ([[a b];[1 2] [3 4]] | polars into-df);
    polars store-ls | get key | first | polars store-get $in
```
