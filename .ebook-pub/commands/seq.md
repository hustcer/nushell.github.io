# seq

**version**: 0.100.1

## **usage**:

Output sequences of numbers.

## Signature

`> seq ...rest`

## Parameters

- `...rest`: Sequence values.

## Input/output types:

| input   | output         |
| ------- | -------------- |
| nothing | list\<number\> |

## Examples

sequence 1 to 10

```bash
> seq 1 10
```

sequence 1.0 to 2.0 by 0.1s

```bash
> seq 1.0 0.1 2.0
```

sequence 1 to 5, then convert to a string with a pipe separator

```bash
> seq 1 5 | str join '|'
```

## Subcommands:

| name                                     | type     | usage                                 |
| ---------------------------------------- | -------- | ------------------------------------- |
| [`seq char`](/commands/docs/seq_char.md) | built-in | Print a sequence of ASCII characters. |
| [`seq date`](/commands/docs/seq_date.md) | built-in | Print sequences of dates.             |
