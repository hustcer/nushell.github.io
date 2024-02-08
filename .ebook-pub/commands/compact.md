# compact

**version**: 0.90.2

## **usage**:

Creates a table with non-empty rows.

## Signature

`> compact ...rest --empty`

## Parameters

- `...rest`: The columns to compact from the table.
- `--empty`: also compact empty items like "", {}, and []

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |

## Examples

Filter out all records where 'Hello' is null

```bash
> [["Hello" "World"]; [null 3]] | compact Hello
```

Filter out all records where 'World' is null

```bash
> [["Hello" "World"]; [null 3]] | compact World
```

Filter out all instances of null from a list

```bash
> [1, null, 2] | compact
```

Filter out all instances of null and empty items from a list

```bash
> [1, null, 2, "", 3, [], 4, {}, 5] | compact --empty
```
