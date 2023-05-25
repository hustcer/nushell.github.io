# path dirname

**version**: 0.80.0

## **usage**:

Get the parent directory of a path.

## Signature

`> path dirname --columns --replace --num-levels`

## Parameters

- `--columns {table}`: For a record or table input, convert strings at the given columns to their dirname
- `--replace {string}`: Return original path with dirname replaced by this string
- `--num-levels {int}`: Number of directories to walk up

## Examples

Get dirname of a path

```bash
> '/home/joe/code/test.txt' | path dirname
```

Get dirname of a path in a column

```bash
> ls ('.' | path expand) | path dirname -c [ name ]
```

Walk up two levels

```bash
> '/home/joe/code/test.txt' | path dirname -n 2
```

Replace the part that would be returned with a custom path

```bash
> '/home/joe/code/test.txt' | path dirname -n 2 -r /home/viking
```
