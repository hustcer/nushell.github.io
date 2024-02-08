# path relative-to

**version**: 0.90.2

## **usage**:

Express a path as relative to another path.

## Signature

`> path relative-to (path)`

## Parameters

- `path`: Parent shared with the input path.

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| string         | string         |

## Examples

Find a relative path from two absolute paths

```bash
> '/home/viking' | path relative-to '/home'
```

Find a relative path from absolute paths in list

```bash
> [ /home/viking, /home/spam ] | path relative-to '/home'
```

Find a relative path from two relative paths

```bash
> 'eggs/bacon/sausage/spam' | path relative-to 'eggs/bacon/sausage'
```

## Notes

```text
Can be used only when the input and the argument paths are either both
absolute or both relative. The argument path needs to be a parent of the input
path.
```
