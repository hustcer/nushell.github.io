# to json

**version**: 0.100.1

## **usage**:

Converts table data into JSON text.

## Signature

`> to json --raw --indent --tabs`

## Parameters

- `--raw`: remove all of the whitespace
- `--indent {number}`: specify indentation width
- `--tabs {number}`: specify indentation tab quantity

## Input/output types:

| input | output |
| ----- | ------ |
| any   | string |

## Examples

Outputs a JSON string, with default indentation, representing the contents of this table

```bash
> [a b c] | to json
```

Outputs a JSON string, with 4-space indentation, representing the contents of this table

```bash
> [Joe Bob Sam] | to json --indent 4
```

Outputs an unformatted JSON string representing the contents of this table

```bash
> [1 2 3] | to json -r
```
