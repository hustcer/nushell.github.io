# cd

**version**: 0.85.0

## **usage**:

Change directory.

## Signature

`> cd (path)`

## Parameters

- `path`: the path to change to

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |
| string  | nothing |

## Examples

Change to your home directory

```bash
> cd ~
```

Change to a directory via abbreviations

```bash
> cd d/s/9
```

Change to the previous working directory ($OLDPWD)

```bash
> cd -
```
