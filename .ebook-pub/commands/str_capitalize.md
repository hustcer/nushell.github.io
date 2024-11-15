# str capitalize

**version**: 0.100.1

## **usage**:

Capitalize first letter of text.

## Signature

`> str capitalize ...rest`

## Parameters

- `...rest`: For a data structure input, convert strings at the given cell paths.

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| record         | record         |
| string         | string         |
| table          | table          |

## Examples

Capitalize contents

```bash
> 'good day' | str capitalize
```

Capitalize contents

```bash
> 'anton' | str capitalize
```

Capitalize a column in a table

```bash
> [[lang, gems]; [nu_test, 100]] | str capitalize lang
```
