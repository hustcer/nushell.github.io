# is-not-empty

**version**: 0.100.1

## **usage**:

Check for non-empty values.

## Signature

`> is-not-empty ...rest`

## Parameters

- `...rest`: The names of the columns to check emptiness.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | bool   |

## Examples

Check if a string is empty

```bash
> '' | is-not-empty
```

Check if a list is empty

```bash
> [] | is-not-empty
```

Check if more than one column are empty

```bash
> [[meal size]; [arepa small] [taco '']] | is-not-empty meal size
```
