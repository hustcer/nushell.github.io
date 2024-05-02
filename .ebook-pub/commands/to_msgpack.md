# to msgpack

**version**: 0.93.0

## **usage**:

Convert Nu values into MessagePack.

## Signature

`> to msgpack `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | binary |

## Examples

Convert a list of values to MessagePack

```bash
> [foo, 42, false] | to msgpack
```

Convert a range to a MessagePack array

```bash
> 1..10 | to msgpack
```

Convert a table to MessagePack

```bash
> [
        [event_name time];
        ['Apollo 11 Landing' 1969-07-24T16:50:35]
        ['Nushell first commit' 2019-05-10T09:59:12-07:00]
    ] | to msgpack
```

## Notes

```text
Not all values are representable as MessagePack.

The datetime extension type is used for dates. Binaries are represented with
the native MessagePack binary type. Most other types are represented in an
analogous way to `to json`, and may not convert to the exact same type when
deserialized with `from msgpack`.

MessagePack: https://msgpack.org/
```
