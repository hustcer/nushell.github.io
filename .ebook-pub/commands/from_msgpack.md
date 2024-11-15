# from msgpack

**version**: 0.100.1

## **usage**:

Convert MessagePack data into Nu values.

## Signature

`> from msgpack --objects`

## Parameters

- `--objects`: Read multiple objects from input

## Input/output types:

| input  | output |
| ------ | ------ |
| binary | any    |

## Examples

Read a list of values from MessagePack

```bash
> 0x[93A3666F6F2AC2] | from msgpack
```

Read a stream of multiple values from MessagePack

```bash
> 0x[81A76E757368656C6CA5726F636B73A9736572696F75736C79] | from msgpack --objects
```

Read a table from MessagePack

```bash
> 0x[9282AA6576656E745F6E616D65B141706F6C6C6F203131204C616E64696E67A474696D65C70CFF00000000FFFFFFFFFF2CAB5B82AA6576656E745F6E616D65B44E757368656C6C20666972737420636F6D6D6974A474696D65D6FF5CD5ADE0] | from msgpack
```

## Notes

```text

Not all values are representable as MessagePack.

The datetime extension type is read as dates. MessagePack binary values are
read to their Nu equivalent. Most other types are read in an analogous way to
`from json`, and may not convert to the exact same type if `to msgpack` was
used originally to create the data.

MessagePack: https://msgpack.org/

```
