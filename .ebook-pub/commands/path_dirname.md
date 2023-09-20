# path dirname

**version**: 0.85.0

## **usage**:

Get the parent directory of a path.

## Signature

`> path dirname --replace --num-levels`

## Parameters

- `--replace {string}`: Return original path with dirname replaced by this string
- `--num-levels {int}`: Number of directories to walk up

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| string         | string         |

## Examples

Get dirname of a path

```bash
> '/home/joe/code/test.txt' | path dirname
```

Get dirname of a list of paths

```bash
> [ /home/joe/test.txt, /home/doe/test.txt ] | path dirname
```

Walk up two levels

```bash
> '/home/joe/code/test.txt' | path dirname -n 2
```

Replace the part that would be returned with a custom path

```bash
> '/home/joe/code/test.txt' | path dirname -n 2 -r /home/viking
```
