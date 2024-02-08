# last

**version**: 0.90.2

## **usage**:

Return only the last several rows of the input. Counterpart of `first`. Opposite of `drop`.

## Signature

`> last (rows)`

## Parameters

- `rows`: Starting from the back, the number of rows to return.

## Input/output types:

| input       | output |
| ----------- | ------ |
| binary      | binary |
| list\<any\> | any    |

## Examples

Return the last 2 items of a list/table

```bash
> [1,2,3] | last 2
```

Return the last item of a list/table

```bash
> [1,2,3] | last
```

Return the last 2 bytes of a binary value

```bash
> 0x[01 23 45] | last 2
```
