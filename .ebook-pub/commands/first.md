# first

**version**: 0.93.0

## **usage**:

Return only the first several rows of the input. Counterpart of `last`. Opposite of `skip`.

## Signature

`> first (rows)`

## Parameters

- `rows`: Starting from the front, the number of rows to return.

## Input/output types:

| input       | output |
| ----------- | ------ |
| binary      | binary |
| list\<any\> | any    |
| range       | any    |

## Examples

Return the first item of a list/table

```bash
> [1 2 3] | first
```

Return the first 2 items of a list/table

```bash
> [1 2 3] | first 2
```

Return the first 2 bytes of a binary value

```bash
> 0x[01 23 45] | first 2
```

Return the first item of a range

```bash
> 1..3 | first
```
