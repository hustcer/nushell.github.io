# path parse

**version**: 0.93.0

## **usage**:

Convert a path into structured data.

## Signature

`> path parse --extension`

## Parameters

- `--extension {string}`: Manually supply the extension (without the dot)

## Input/output types:

| input          | output |
| -------------- | ------ |
| list\<string\> | table  |
| string         | record |

## Examples

Parse a path

```bash
> '/home/viking/spam.txt' | path parse
```

Replace a complex extension

```bash
> '/home/viking/spam.tar.gz' | path parse --extension tar.gz | upsert extension { 'txt' }
```

Ignore the extension

```bash
> '/etc/conf.d' | path parse --extension ''
```

Parse all paths in a list

```bash
> [ /home/viking.d /home/spam.txt ] | path parse
```

## Notes

```text
Each path is split into a table with 'parent', 'stem' and 'extension' fields.
On Windows, an extra 'prefix' column is added.
```
