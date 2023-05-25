# path join

**version**: 0.80.0

## **usage**:

Join a structured path or a list of path parts.

## Signature

`> path join ...rest --columns`

## Parameters

- `...rest`: Path to append to the input
- `--columns {table}`: For a record or table input, join strings at the given columns

## Notes

```text
Optionally, append an additional path to the result. It is designed to accept
the output of 'path parse' and 'path split' subcommands.
```

## Examples

Append a filename to a path

```bash
> '/home/viking' | path join spam.txt
```

Append a filename to a path

```bash
> '/home/viking' | path join spams this_spam.txt
```

Append a filename to a path inside a column

```bash
> ls | path join spam.txt -c [ name ]
```

Join a list of parts into a path

```bash
> [ '/' 'home' 'viking' 'spam.txt' ] | path join
```

Join a structured path into a path

```bash
> [[ parent stem extension ]; [ '/home/viking' 'spam' 'txt' ]] | path join
```
