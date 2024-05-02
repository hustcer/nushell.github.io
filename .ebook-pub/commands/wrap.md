# wrap

**version**: 0.93.0

## **usage**:

Wrap the value into a column.

## Signature

`> wrap (name)`

## Parameters

- `name`: The name of the column.

## Input/output types:

| input       | output |
| ----------- | ------ |
| any         | record |
| list\<any\> | table  |
| range       | table  |

## Examples

Wrap a list into a table with a given column name

```bash
> [1 2 3] | wrap num
```

Wrap a range into a table with a given column name

```bash
> 1..3 | wrap num
```
