# path basename

**version**: 0.80.0

## **usage**:

Get the final component of a path.

## Signature

`> path basename --columns --replace`

## Parameters

- `--columns {table}`: For a record or table input, convert strings in the given columns to their basename
- `--replace {string}`: Return original path with basename replaced by this string

## Examples

Get basename of a path

```bash
> '/home/joe/test.txt' | path basename
```

Get basename of a path by column

```bash
> [[name];[/home/joe]] | path basename -c [ name ]
```

Replace basename of a path

```bash
> '/home/joe/test.txt' | path basename -r 'spam.png'
```
