# bytes collect

**version**: 0.90.2

## **usage**:

Concatenate multiple binary into a single binary, with an optional separator between each.

## Signature

`> bytes collect (separator)`

## Parameters

- `separator`: Optional separator to use when creating binary.

## Input/output types:

| input          | output |
| -------------- | ------ |
| list\<binary\> | binary |

## Examples

Create a byte array from input

```bash
> [0x[11] 0x[13 15]] | bytes collect
```

Create a byte array from input with a separator

```bash
> [0x[11] 0x[33] 0x[44]] | bytes collect 0x[01]
```
