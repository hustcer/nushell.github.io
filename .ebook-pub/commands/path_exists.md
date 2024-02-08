# path exists

**version**: 0.90.2

## **usage**:

Check whether a path exists.

## Signature

`> path exists --no-symlink`

## Parameters

- `--no-symlink`: Do not resolve symbolic links

## Input/output types:

| input          | output       |
| -------------- | ------------ |
| list\<string\> | list\<bool\> |
| string         | bool         |

## Examples

Check if a file exists

```bash
> '/home/joe/todo.txt' | path exists
```

Check if files in list exist

```bash
> [ /home/joe/todo.txt, /home/doe/todo.txt ] | path exists
```

## Notes

```text
This only checks if it is possible to either `open` or `cd` to the given path.
If you need to distinguish dirs and files, please use `path type`.
```
