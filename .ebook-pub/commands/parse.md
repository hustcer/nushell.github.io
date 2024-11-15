# parse

**version**: 0.100.1

## **usage**:

Parse columns from string data using a simple pattern or a supplied regular expression.

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

This is how the first example is interpreted in the source code

```bash
> "hi there" | parse --regex '(?s)\A(?P<foo>.*?) (?P<bar>.*?)\z'
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

## Notes

```text
The parse command always uses regular expressions even when you use a simple pattern. If a simple pattern is supplied, parse will transform that pattern into a regular expression.
```
