# roll right

**version**: 0.93.0

## **usage**:

Roll table columns right.

## Signature

`> roll right --by --cells-only`

## Parameters

- `--by {int}`: Number of columns to roll
- `--cells-only`: rotates columns leaving headers fixed

## Input/output types:

| input  | output |
| ------ | ------ |
| record | record |
| table  | table  |

## Examples

Rolls columns of a record to the right

```bash
> {a:1 b:2 c:3} | roll right
```

Rolls columns to the right

```bash
> [[a b c]; [1 2 3] [4 5 6]] | roll right
```

Rolls columns to the right with fixed headers

```bash
> [[a b c]; [1 2 3] [4 5 6]] | roll right --cells-only
```
