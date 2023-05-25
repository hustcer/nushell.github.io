# bytes collect

**version**: 0.80.0

## **usage**:

Concatenate multiple binary into a single binary, with an optional separator between each.

## Signature

`> bytes collect (separator)`

## Parameters

- `separator`: optional separator to use when creating binary

## Examples

Create a byte array from input

```bash
> [0x[11] 0x[13 15]] | bytes collect
```

Create a byte array from input with a separator

```bash
> [0x[11] 0x[33] 0x[44]] | bytes collect 0x[01]
```
