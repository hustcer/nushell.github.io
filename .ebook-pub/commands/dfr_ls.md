# dfr ls

**version**: 0.90.2

## **usage**:

Lists stored dataframes.

## Signature

`> dfr ls `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Creates a new dataframe and shows it in the dataframe list

```bash
> let test = ([[a b];[1 2] [3 4]] | dfr into-df);
    ls
```
