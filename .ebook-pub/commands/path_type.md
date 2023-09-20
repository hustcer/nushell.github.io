# path type

**version**: 0.85.0

## **usage**:

Get the type of the object a path refers to (e.g., file, dir, symlink).

## Signature

`> path type `

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| string         | string         |

## Examples

Show type of a filepath

```bash
> '.' | path type
```

Show type of a filepaths in a list

```bash
> ls | get name | path type
```

## Notes

```text
This checks the file system to confirm the path's object type.
If nothing is found, an empty string will be returned.
```
