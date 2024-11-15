# polars store-ls

**version**: 0.100.1

## **usage**:

Lists stored polars objects.

## Signature

`> polars store-ls `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Creates a new dataframe and shows it in the dataframe list

```bash
> let test = ([[a b];[1 2] [3 4]] | polars into-df);
    polars store-ls
```
