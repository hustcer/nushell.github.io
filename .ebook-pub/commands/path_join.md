# path join

**version**: 0.100.1

## **usage**:

Join a structured path or a list of path parts.

## Signature

`> path join ...rest`

## Parameters

- `...rest`: Path to append to the input.

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | string         |
| record         | string         |
| string         | string         |
| table          | list\<string\> |

## Examples

Append a filename to a path

```bash
> '/home/viking' | path join spam.txt
```

Append a filename to a path

```bash
> '/home/viking' | path join spams this_spam.txt
```

Use relative paths, e.g. '..' will go up one directory

```bash
> '/home/viking' | path join .. folder
```

Use absolute paths, e.g. '/' will bring you to the top level directory

```bash
> '/home/viking' | path join / folder
```

Join a list of parts into a path

```bash
> [ '/' 'home' 'viking' 'spam.txt' ] | path join
```

Join a structured path into a path

```bash
> { parent: '/home/viking', stem: 'spam', extension: 'txt' } | path join
```

Join a table of structured paths into a list of paths

```bash
> [[ parent stem extension ]; [ '/home/viking' 'spam' 'txt' ]] | path join
```

## Notes

```text
Optionally, append an additional path to the result. It is designed to accept
the output of 'path parse' and 'path split' subcommands.
```
