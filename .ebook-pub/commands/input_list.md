# input list

**version**: 0.85.0

## **usage**:

Interactive list selection.

## Signature

`> input list (prompt) --multi --fuzzy`

## Parameters

- `prompt`: the prompt to display
- `--multi`: Use multiple results, you can press a to toggle all options on/off
- `--fuzzy`: Use a fuzzy select.

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |

## Examples

Return a single value from a list

```bash
> [1 2 3 4 5] | input list 'Rate it'
```

Return multiple values from a list

```bash
> [Banana Kiwi Pear Peach Strawberry] | input list -m 'Add fruits to the basket'
```

Return a single record from a table with fuzzy search

```bash
> ls | input list -f 'Select the target'
```

## Notes

```text
Abort with esc or q.
```
