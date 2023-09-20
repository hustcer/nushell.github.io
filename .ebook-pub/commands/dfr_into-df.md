# dfr into-df

**version**: 0.85.0

## **usage**:

Converts a list, table or record into a dataframe.

## Signature

`> dfr into-df `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Takes a dictionary and creates a dataframe

```bash
> [[a b];[1 2] [3 4]] | dfr into-df
```

Takes a list of tables and creates a dataframe

```bash
> [[1 2 a] [3 4 b] [5 6 c]] | dfr into-df
```

Takes a list and creates a dataframe

```bash
> [a b c] | dfr into-df
```

Takes a list of booleans and creates a dataframe

```bash
> [true true false] | dfr into-df
```
