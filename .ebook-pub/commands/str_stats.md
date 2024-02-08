# str stats

**version**: 0.90.2

## **usage**:

Gather word count statistics on the text.

## Signature

`> str stats `

## Input/output types:

| input  | output |
| ------ | ------ |
| string | record |

## Examples

Count the number of words in a string

```bash
> "There are seven words in this sentence" | str stats
```

Counts unicode characters

```bash
> '今天天气真好' | str stats
```

Counts Unicode characters correctly in a string

```bash
> "Amélie Amelie" | str stats
```
