# polars store-rm

**version**: 0.100.1

## **usage**:

Removes a stored Dataframe or other object from the plugin cache.

## Signature

`> polars store-rm ...rest`

## Parameters

- `...rest`: Keys of objects to remove

## Input/output types:

| input | output         |
| ----- | -------------- |
| any   | list\<string\> |

## Examples

Removes a stored

```bash
> let df = ([[a b];[1 2] [3 4]] | polars into-df);
    polars store-ls | get key | first | polars store-rm $in
```
