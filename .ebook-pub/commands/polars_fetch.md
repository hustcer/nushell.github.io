# polars fetch

**version**: 0.100.1

## **usage**:

Collects the lazyframe to the selected rows.

## Signature

`> polars fetch (rows)`

## Parameters

- `rows`: number of rows to be fetched from lazyframe

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Fetch a rows from the dataframe

```bash
> [[a b]; [6 2] [4 2] [2 2]] | polars into-df | polars fetch 2
```
