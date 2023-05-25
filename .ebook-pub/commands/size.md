# size

**version**: 0.80.0

## **usage**:

Gather word count statistics on the text.

## Signature

`> size `

## Examples

Count the number of words in a string

```bash
> "There are seven words in this sentence" | size
```

Counts unicode characters

```bash
> '今天天气真好' | size
```

Counts Unicode characters correctly in a string

```bash
> "Amélie Amelie" | size
```
