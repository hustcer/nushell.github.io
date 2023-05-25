# path parse

**version**: 0.80.0

## **usage**:

Convert a path into structured data.

## Signature

`> path parse --columns --extension`

## Parameters

- `--columns {table}`: For a record or table input, convert strings at the given columns
- `--extension {string}`: Manually supply the extension (without the dot)

## Notes

```text
Each path is split into a table with 'parent', 'stem' and 'extension' fields.
On Windows, an extra 'prefix' column is added.
```

## Examples

Parse a path

```bash
> '/home/viking/spam.txt' | path parse
```

Replace a complex extension

```bash
> '/home/viking/spam.tar.gz' | path parse -e tar.gz | upsert extension { 'txt' }
```

Ignore the extension

```bash
> '/etc/conf.d' | path parse -e ''
```

Parse all paths under the 'name' column

```bash
> ls | path parse -c [ name ]
```
