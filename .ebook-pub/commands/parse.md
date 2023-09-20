# parse

**version**: 0.85.0

## **usage**:

Parse columns from string data using a simple pattern.

## Signature

`> parse (pattern) --regex`

## Parameters

- `pattern`: the pattern to match. Eg) "{foo}: {bar}"
- `--regex`: use full regex syntax for patterns

## Input/output types:

| input       | output |
| ----------- | ------ |
| list\<any\> | table  |
| string      | table  |

## Examples

Parse a string into two named columns

```bash
> "hi there" | parse "{foo} {bar}"
```

Parse a string using regex pattern

```bash
> "hi there" | parse -r '(?P<foo>\w+) (?P<bar>\w+)'
```

Parse a string using fancy-regex named capture group pattern

```bash
> "foo bar." | parse -r '\s*(?<name>\w+)(?=\.)'
```

Parse a string using fancy-regex capture group pattern

```bash
> "foo! bar." | parse -r '(\w+)(?=\.)|(\w+)(?=!)'
```

Parse a string using fancy-regex look behind pattern

```bash
> " @another(foo bar)   " | parse -r '\s*(?<=[() ])(@\w+)(\([^)]*\))?\s*'
```

Parse a string using fancy-regex look ahead atomic group pattern

```bash
> "abcd" | parse -r '^a(bc(?=d)|b)cd$'
```
