# str capitalize

**version**: 0.80.0

## **usage**:

Capitalize first letter of text.

## Signature

`> str capitalize ...rest`

## Parameters

- `...rest`: For a data structure input, convert strings at the given cell paths

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
