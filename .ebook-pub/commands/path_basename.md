# path basename

**version**: 0.100.1

## **usage**:

Get the final component of a path.

## Signature

`> path basename --replace`

## Parameters

- `--replace {string}`: Return original path with basename replaced by this string

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| string         | string         |

## Examples

Get basename of a path

```bash
> '/home/joe/test.txt' | path basename
```

Get basename of a list of paths

```bash
> [ /home/joe, /home/doe ] | path basename
```

Replace basename of a path

```bash
> '/home/joe/test.txt' | path basename --replace 'spam.png'
```
