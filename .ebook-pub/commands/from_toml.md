# from toml

**version**: 0.80.0

## **usage**:

Parse text as .toml and create record.

## Signature

`> from toml `

## Examples

Converts toml formatted string to record

```bash
> 'a = 1' | from toml
```

Converts toml formatted string to record

```bash
> 'a = 1
b = [1, 2]' | from toml
```
