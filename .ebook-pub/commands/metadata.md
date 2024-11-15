# metadata

**version**: 0.100.1

## **usage**:

Get the metadata for items in the stream.

## Signature

`> metadata (expression)`

## Parameters

- `expression`: The expression you want metadata for.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | record |

## Examples

Get the metadata of a variable

```bash
> let a = 42; metadata $a
```

Get the metadata of the input

```bash
> ls | metadata
```

## Subcommands:

| name                                                   | type     | usage                                                      |
| ------------------------------------------------------ | -------- | ---------------------------------------------------------- |
| [`metadata access`](/commands/docs/metadata_access.md) | built-in | Access the metadata for the input stream within a closure. |
| [`metadata set`](/commands/docs/metadata_set.md)       | built-in | Set the metadata for items in the stream.                  |
