# to nuon

**version**: 0.85.0

## **usage**:

Converts table data into Nuon (Nushell Object Notation) text.

## Signature

`> to nuon --raw --indent --tabs`

## Parameters

- `--raw`: remove all of the whitespace (default behaviour and overwrites -i and -t)
- `--indent {number}`: specify indentation width
- `--tabs {number}`: specify indentation tab quantity

## Input/output types:

| input | output |
| ----- | ------ |
| any   | string |

## Examples

Outputs a NUON string representing the contents of this list, compact by default

```bash
> [1 2 3] | to nuon
```

Outputs a NUON array of integers, with pretty indentation

```bash
> [1 2 3] | to nuon --indent 2
```

Overwrite any set option with --raw

```bash
> [1 2 3] | to nuon --indent 2 --raw
```

A more complex record with multiple data types

```bash
> {date: 2000-01-01, data: [1 [2 3] 4.56]} | to nuon --indent 2
```
