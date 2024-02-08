# take

**version**: 0.90.2

## **usage**:

Take only the first n elements of a list, or the first n bytes of a binary value.

## Signature

`> take (n)`

## Parameters

- `n`: Starting from the front, the number of elements to return.

## Input/output types:

| input       | output         |
| ----------- | -------------- |
| binary      | binary         |
| list\<any\> | list\<any\>    |
| range       | list\<number\> |
| table       | table          |

## Examples

Return the first item of a list/table

```bash
> [1 2 3] | take 1
```

Return the first 2 items of a list/table

```bash
> [1 2 3] | take 2
```

Return the first two rows of a table

```bash
> [[editions]; [2015] [2018] [2021]] | take 2
```

Return the first 2 bytes of a binary value

```bash
> 0x[01 23 45] | take 2
```

Return the first 3 elements of a range

```bash
> 1..10 | take 3
```

## Subcommands:

| name                                         | type    | usage                                                 |
| -------------------------------------------- | ------- | ----------------------------------------------------- |
| [`take until`](/commands/docs/take_until.md) | Builtin | Take elements of the input until a predicate is true. |
| [`take while`](/commands/docs/take_while.md) | Builtin | Take elements of the input while a predicate is true. |
