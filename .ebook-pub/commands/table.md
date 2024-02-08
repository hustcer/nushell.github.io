# table

**version**: 0.90.2

## **usage**:

Render the table.

## Signature

`> table --theme --index --width --expand --expand-deep --flatten --flatten-separator --collapse --abbreviated --list`

## Parameters

- `--theme {string}`: set a table mode/theme
- `--index {any}`: enable (true) or disable (false) the #/index column or set the starting index
- `--width {int}`: number of terminal columns wide (not output columns)
- `--expand`: expand the table structure in a light mode
- `--expand-deep {int}`: an expand limit of recursion which will take place, must be used with --expand
- `--flatten`: Flatten simple arrays
- `--flatten-separator {string}`: sets a separator when 'flatten' used
- `--collapse`: expand the table structure in collapse mode.
  Be aware collapse mode currently doesn't support width control
- `--abbreviated {int}`: abbreviate the data in the table by truncating the middle part and only showing amount provided on top and bottom
- `--list`: list available table modes/themes

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

List the files in current directory, with indexes starting from 1

```bash
> ls | table --index 1
```

Render data in table view

```bash
> [[a b]; [1 2] [3 4]] | table
```

Render data in table view (expanded)

```bash
> [[a b]; [1 2] [2 [4 4]]] | table --expand
```

Render data in table view (collapsed)

```bash
> [[a b]; [1 2] [2 [4 4]]] | table --collapse
```

Change the table theme to the specified theme for a single run

```bash
> [[a b]; [1 2] [2 [4 4]]] | table --theme basic
```

Force showing of the #/index column for a single run

```bash
> [[a b]; [1 2] [2 [4 4]]] | table -i true
```

Set the starting number of the #/index column to 100 for a single run

```bash
> [[a b]; [1 2] [2 [4 4]]] | table -i 100
```

Force hiding of the #/index column for a single run

```bash
> [[a b]; [1 2] [2 [4 4]]] | table -i false
```

## Notes

```text
If the table contains a column called 'index', this column is used as the table index instead of the usual continuous index.
```
