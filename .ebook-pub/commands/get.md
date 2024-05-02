# get

**version**: 0.93.0

## **usage**:

Extract data using a cell path.

## Signature

`> get (cell_path) ...rest --ignore-errors --sensitive`

## Parameters

- `cell_path`: The cell path to the data.
- `...rest`: Additional cell paths.
- `--ignore-errors`: ignore missing data (make all cell path members optional)
- `--sensitive`: get path in a case sensitive manner

## Input/output types:

| input       | output |
| ----------- | ------ |
| list\<any\> | any    |
| record      | any    |
| table       | any    |

## Examples

Get an item from a list

```bash
> [0 1 2] | get 1
```

Get a column from a table

```bash
> [{A: A0}] | get A
```

Get a cell from a table

```bash
> [{A: A0}] | get 0.A
```

Extract the name of the 3rd record in a list (same as `ls | $in.name`)

```bash
> ls | get name.2
```

Extract the name of the 3rd record in a list

```bash
> ls | get 2.name
```

Extract the cpu list from the sys information record

```bash
> sys | get cpu
```

Getting Path/PATH in a case insensitive way

```bash
> $env | get paTH
```

Getting Path in a case sensitive way, won't work for 'PATH'

```bash
> $env | get --sensitive Path
```

## Notes

```text
This is equivalent to using the cell path access syntax: `$env.OS` is the same as `$env | get OS`.

If multiple cell paths are given, this will produce a list of values.
```
