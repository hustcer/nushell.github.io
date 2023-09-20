# str upcase

**version**: 0.85.0

## **usage**:

Make text uppercase.

## Signature

`> str upcase ...rest`

## Parameters

- `...rest`: For a data structure input, convert strings at the given cell paths

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| record         | record         |
| string         | string         |
| table          | table          |

## Examples

Upcase contents

```bash
> 'nu' | str upcase
```
