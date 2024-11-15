# wrap

**version**: 0.100.1

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
> [ Pachisi Mahjong Catan Carcassonne ] | wrap game
```

Wrap a range into a table with a given column name

```bash
> 4..6 | wrap num
```
