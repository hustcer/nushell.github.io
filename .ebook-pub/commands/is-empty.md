# is-empty

**version**: 0.85.0

## **usage**:

Check for empty values.

## Signature

`> is-empty ...rest`

## Parameters

- `...rest`: the names of the columns to check emptiness

## Input/output types:

| input | output |
| ----- | ------ |
| any   | bool   |

## Examples

Check if a string is empty

```bash
> '' | is-empty
```

Check if a list is empty

```bash
> [] | is-empty
```

Check if more than one column are empty

```bash
> [[meal size]; [arepa small] [taco '']] | is-empty meal size
```
