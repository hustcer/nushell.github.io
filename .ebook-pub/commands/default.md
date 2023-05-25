# default

**version**: 0.80.0

## **usage**:

Sets a default row's column if missing.

## Signature

`> default (default value) (column name)`

## Parameters

- `default value`: the value to use as a default
- `column name`: the name of the column

## Examples

Give a default 'target' column to all file entries

```bash
> ls -la | default 'nothing' target
```

Get the env value of `MY_ENV` with a default value 'abc' if not present

```bash
> $env | get -i MY_ENV | default 'abc'
```

Replace the `null` value in a list

```bash
> [1, 2, null, 4] | default 3
```
