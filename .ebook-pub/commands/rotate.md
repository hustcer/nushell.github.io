# rotate

**version**: 0.100.1

## **usage**:

Rotates a table or record clockwise (default) or counter-clockwise (use --ccw flag).

## Signature

`> rotate ...rest --ccw`

## Parameters

- `...rest`: the names to give columns once rotated
- `--ccw`: rotate counter clockwise

## Input/output types:

| input  | output |
| ------ | ------ |
| record | table  |
| table  | table  |

## Examples

Rotate a record clockwise, producing a table (like `transpose` but with column order reversed)

```bash
> {a:1, b:2} | rotate
```

Rotate 2x3 table clockwise

```bash
> [[a b]; [1 2] [3 4] [5 6]] | rotate
```

Rotate table clockwise and change columns names

```bash
> [[a b]; [1 2]] | rotate col_a col_b
```

Rotate table counter clockwise

```bash
> [[a b]; [1 2]] | rotate --ccw
```

Rotate table counter-clockwise

```bash
> [[a b]; [1 2] [3 4] [5 6]] | rotate --ccw
```

Rotate table counter-clockwise and change columns names

```bash
> [[a b]; [1 2]] | rotate --ccw col_a col_b
```
