# parse

**version**: 0.93.0

## **usage**:

Parse columns from string data using a simple pattern.

## Signature

`> parse (pattern) --regex`

## Parameters

- `pattern`: The pattern to match.
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
> "hi there" | parse --regex '(?P<foo>\w+) (?P<bar>\w+)'
```

Parse a string using fancy-regex named capture group pattern

```bash
> "foo bar." | parse --regex '\s*(?<name>\w+)(?=\.)'
```

Parse a string using fancy-regex capture group pattern

```bash
> "foo! bar." | parse --regex '(\w+)(?=\.)|(\w+)(?=!)'
```

Parse a string using fancy-regex look behind pattern

```bash
> " @another(foo bar)   " | parse --regex '\s*(?<=[() ])(@\w+)(\([^)]*\))?\s*'
```

Parse a string using fancy-regex look ahead atomic group pattern

```bash
> "abcd" | parse --regex '^a(bc(?=d)|b)cd$'
```
