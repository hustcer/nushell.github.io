# str downcase

**version**: 0.80.0

## **usage**:

Make text lowercase.

## Signature

`> str downcase ...rest`

## Parameters

- `...rest`: For a data structure input, convert strings at the given cell paths

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
