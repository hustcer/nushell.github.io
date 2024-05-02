# from json

**version**: 0.93.0

## **usage**:

Convert from json to structured data.

## Signature

`> from json --objects --strict`

## Parameters

- `--objects`: treat each line as a separate value
- `--strict`: follow the json specification exactly

## Input/output types:

| input  | output |
| ------ | ------ |
| string | any    |

## Examples

Converts json formatted string to table

```bash
> '{ "a": 1 }' | from json
```

Converts json formatted string to table

```bash
> '{ "a": 1, "b": [1, 2] }' | from json
```

Parse json strictly which will error on comments and trailing commas

```bash
> '{ "a": 1, "b": 2 }' | from json -s
```
