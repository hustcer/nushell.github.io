# roll left

**version**: 0.93.0

## **usage**:

Roll record or table columns left.

## Signature

`> roll left --by --cells-only`

## Parameters

- `--by {int}`: Number of columns to roll
- `--cells-only`: rotates columns leaving headers fixed

## Input/output types:

| input  | output |
| ------ | ------ |
| record | record |
| table  | table  |

## Examples

Rolls columns of a record to the left

```bash
> {a:1 b:2 c:3} | roll left
```

Rolls columns of a table to the left

```bash
> [[a b c]; [1 2 3] [4 5 6]] | roll left
```

Rolls columns to the left without changing column names

```bash
> [[a b c]; [1 2 3] [4 5 6]] | roll left --cells-only
```
