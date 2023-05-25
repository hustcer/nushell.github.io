# flatten

**version**: 0.80.0

## **usage**:

Flatten the table.

## Signature

`> flatten ...rest --all`

## Parameters

- `...rest`: optionally flatten data by column
- `--all`: flatten inner table one level out

## Examples

flatten a table

```bash
> [[N, u, s, h, e, l, l]] | flatten
```

flatten a table, get the first item

```bash
> [[N, u, s, h, e, l, l]] | flatten | first
```

flatten a column having a nested table

```bash
> [[origin, people]; [Ecuador, ([[name, meal]; ['Andres', 'arepa']])]] | flatten --all | get meal
```

restrict the flattening by passing column names

```bash
> [[origin, crate, versions]; [World, ([[name]; ['nu-cli']]), ['0.21', '0.22']]] | flatten versions --all | last | get versions
```

Flatten inner table

```bash
> { a: b, d: [ 1 2 3 4 ],  e: [ 4 3  ] } | flatten d --all
```
