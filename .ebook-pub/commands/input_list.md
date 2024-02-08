# input list

**version**: 0.90.2

## **usage**:

Interactive list selection.

## Signature

`> input list (prompt) --multi --fuzzy --index --display`

## Parameters

- `prompt`: The prompt to display.
- `--multi`: Use multiple results, you can press a to toggle all options on/off
- `--fuzzy`: Use a fuzzy select.
- `--index`: Returns list indexes.
- `--display {cell-path}`: Field to use as display value

## Input/output types:

| input       | output |
| ----------- | ------ |
| list\<any\> | any    |
| range       | int    |

## Examples

Return a single value from a list

```bash
> [1 2 3 4 5] | input list 'Rate it'
```

Return multiple values from a list

```bash
> [Banana Kiwi Pear Peach Strawberry] | input list --multi 'Add fruits to the basket'
```

Return a single record from a table with fuzzy search

```bash
> ls | input list --fuzzy 'Select the target'
```

Choose an item from a range

```bash
> 1..10 | input list
```

Return the index of a selected item

```bash
> [Banana Kiwi Pear Peach Strawberry] | input list --index
```

Choose an item from a table using a column as display value

```bash
> [[name price]; [Banana 12] [Kiwi 4] [Pear 7]] | input list -d name
```

## Notes

```text
Abort with esc or q.
```
