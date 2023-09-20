# bytes build

**version**: 0.85.0

## **usage**:

Create bytes from the arguments.

## Signature

`> bytes build ...rest`

## Parameters

- `...rest`: list of bytes

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | binary |

## Examples

Builds binary data from 0x[01 02], 0x[03], 0x[04]

```bash
> bytes build 0x[01 02] 0x[03] 0x[04]
```
