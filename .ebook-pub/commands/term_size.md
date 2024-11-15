# term size

**version**: 0.100.1

## **usage**:

Returns a record containing the number of columns (width) and rows (height) of the terminal.

## Signature

`> term size `

## Input/output types:

| input   | output                            |
| ------- | --------------------------------- |
| nothing | record\<columns: int, rows: int\> |

## Examples

Return the columns (width) and rows (height) of the terminal

```bash
> term size
```

Return the columns (width) of the terminal

```bash
> (term size).columns
```

Return the rows (height) of the terminal

```bash
> (term size).rows
```
