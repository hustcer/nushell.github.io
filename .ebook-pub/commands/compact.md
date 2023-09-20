# compact

**version**: 0.85.0

## **usage**:

Creates a table with non-empty rows.

## Signature

`> compact ...rest`

## Parameters

- `...rest`: the columns to compact from the table

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| table       | table       |

## Examples

Filter out all records where 'Hello' is null (returns nothing)

```bash
> [["Hello" "World"]; [null 3]] | compact Hello
```

Filter out all records where 'World' is null (Returns the table)

```bash
> [["Hello" "World"]; [null 3]] | compact World
```

Filter out all instances of nothing from a list (Returns [1,2])

```bash
> [1, null, 2] | compact
```
