# from toml

**version**: 0.93.0

## **usage**:

Parse text as .toml and create record.

## Signature

`> from toml `

## Input/output types:

| input  | output |
| ------ | ------ |
| string | record |

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
