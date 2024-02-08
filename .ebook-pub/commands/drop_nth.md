# drop nth

**version**: 0.90.2

## **usage**:

Drop the selected rows.

## Signature

`> drop nth (row number or row range) ...rest`

## Parameters

- `row number or row range`: The number of the row to drop or a range to drop consecutive rows.
- `...rest`: The number of the row to drop.

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |

## Examples

Drop the first, second, and third row

```bash
> [sam,sarah,2,3,4,5] | drop nth 0 1 2
```

Drop the first, second, and third row

```bash
> [0,1,2,3,4,5] | drop nth 0 1 2
```

Drop rows 0 2 4

```bash
> [0,1,2,3,4,5] | drop nth 0 2 4
```

Drop rows 2 0 4

```bash
> [0,1,2,3,4,5] | drop nth 2 0 4
```

Drop range rows from second to fourth

```bash
> [first second third fourth fifth] | drop nth (1..3)
```

Drop all rows except first row

```bash
> [0,1,2,3,4,5] | drop nth 1..
```

Drop rows 3,4,5

```bash
> [0,1,2,3,4,5] | drop nth 3..
```
