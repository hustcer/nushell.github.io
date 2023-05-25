# to md

**version**: 0.80.0

## **usage**:

Convert table into simple Markdown.

## Signature

`> to md --pretty --per-element`

## Parameters

- `--pretty`: Formats the Markdown table to vertically align items
- `--per-element`: treat each row as markdown syntax element

## Examples

Outputs an MD string representing the contents of this table

```bash
> [[foo bar]; [1 2]] | to md
```

Optionally, output a formatted markdown string

```bash
> [[foo bar]; [1 2]] | to md --pretty
```

Treat each row as a markdown element

```bash
> [{"H1": "Welcome to Nushell" } [[foo bar]; [1 2]]] | to md --per-element --pretty
```

Render a list

```bash
> [0 1 2] | to md --pretty
```
