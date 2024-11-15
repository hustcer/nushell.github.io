# str downcase

**version**: 0.100.1

## **usage**:

Make text lowercase.

## Signature

`> str downcase ...rest`

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

Downcase contents

```bash
> 'NU' | str downcase
```

Downcase contents

```bash
> 'TESTa' | str downcase
```

Downcase contents

```bash
> [[ColA ColB]; [Test ABC]] | str downcase ColA
```

Downcase contents

```bash
> [[ColA ColB]; [Test ABC]] | str downcase ColA ColB
```
