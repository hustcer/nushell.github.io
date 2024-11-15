# skip

**version**: 0.100.1

## **usage**:

Skip the first several rows of the input. Counterpart of `drop`. Opposite of `first`.

## Signature

`> skip (n)`

## Parameters

- `n`: The number of elements to skip.

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| binary      | binary      |
| list\<any\> | list\<any\> |
| table       | table       |

## Examples

Skip the first value of a list

```bash
> [2 4 6 8] | skip 1
```

Skip two rows of a table

```bash
> [[editions]; [2015] [2018] [2021]] | skip 2
```

Skip 2 bytes of a binary value

```bash
> 0x[01 23 45 67] | skip 2
```

## Notes

```text
To skip specific numbered rows, try `drop nth`. To skip specific named columns, try `reject`.
```

## Subcommands:

| name                                         | type     | usage                                                 |
| -------------------------------------------- | -------- | ----------------------------------------------------- |
| [`skip until`](/commands/docs/skip_until.md) | built-in | Skip elements of the input until a predicate is true. |
| [`skip while`](/commands/docs/skip_while.md) | built-in | Skip elements of the input while a predicate is true. |
