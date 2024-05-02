# grid

**version**: 0.93.0

## **usage**:

Renders the output to a textual terminal grid.

## Signature

`> grid --width --color --separator`

## Parameters

- `--width {int}`: number of terminal columns wide (not output columns)
- `--color`: draw output with color
- `--separator {string}`: character to separate grid with

## Input/output types:

| input       | output |
| ----------- | ------ |
| list\<any\> | string |
| record      | string |

## Examples

Render a simple list to a grid

```bash
> [1 2 3 a b c] | grid
```

The above example is the same as:

```bash
> [1 2 3 a b c] | wrap name | grid
```

Render a record to a grid

```bash
> {name: 'foo', b: 1, c: 2} | grid
```

Render a list of records to a grid

```bash
> [{name: 'A', v: 1} {name: 'B', v: 2} {name: 'C', v: 3}] | grid
```

Render a table with 'name' column in it to a grid

```bash
> [[name patch]; [0.1.0 false] [0.1.1 true] [0.2.0 false]] | grid
```

## Notes

```text
grid was built to give a concise gridded layout for ls. however,
it determines what to put in the grid by looking for a column named
'name'. this works great for tables and records but for lists we
need to do something different. such as with '[one two three] | grid'
it creates a fake column called 'name' for these values so that it
prints out the list properly.
```
