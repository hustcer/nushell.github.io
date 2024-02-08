# range

**version**: 0.90.2

## **usage**:

Return only the selected rows.

## Signature

`> range (rows)`

## Parameters

- `rows`: Range of rows to return.

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |

## Examples

Get the last 2 items

```bash
> [0,1,2,3,4,5] | range 4..5
```

Get the last 2 items

```bash
> [0,1,2,3,4,5] | range (-2)..
```

Get the next to last 2 items

```bash
> [0,1,2,3,4,5] | range (-3)..-2
```
