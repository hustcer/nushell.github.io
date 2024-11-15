# path expand

**version**: 0.100.1

## **usage**:

Try to expand a path to its absolute form.

## Signature

`> path expand --strict --no-symlink`

## Parameters

- `--strict`: Throw an error if the path could not be expanded
- `--no-symlink`: Do not resolve symbolic links

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| string         | string         |

## Examples

Expand an absolute path

```bash
> '/home/joe/foo/../bar' | path expand
```

Expand a relative path

```bash
> 'foo/../bar' | path expand
```

Expand a list of paths

```bash
> [ /foo/../bar, /foo/../baz ] | path expand
```
