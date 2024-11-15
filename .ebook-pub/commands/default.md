# default

**version**: 0.100.1

## **usage**:

Sets a default value if a row's column is missing or null.

## Signature

`> default (default value) (column name)`

## Parameters

- `default value`: The value to use as a default.
- `column name`: The name of the column.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Give a default 'target' column to all file entries

```bash
> ls -la | default 'nothing' target
```

Get the env value of `MY_ENV` with a default value 'abc' if not present

```bash
> $env | get --ignore-errors MY_ENV | default 'abc'
```

Replace the `null` value in a list

```bash
> [1, 2, null, 4] | each { default 3 }
```

Replace the missing value in the "a" column of a list

```bash
> [{a:1 b:2} {b:1}] | default 'N/A' a
```
