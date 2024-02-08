# uniq-by

**version**: 0.90.2

## **usage**:

Return the distinct values in the input by the given column(s).

## Signature

`> uniq-by ...rest --count --repeated --ignore-case --unique`

## Parameters

- `...rest`: The column(s) to filter by.
- `--count`: Return a table containing the distinct input values together with their counts
- `--repeated`: Return the input values that occur more than once
- `--ignore-case`: Ignore differences in case when comparing input values
- `--unique`: Return the input values that occur once only

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| table       | table       |

## Examples

Get rows from table filtered by column uniqueness

```bash
> [[fruit count]; [apple 9] [apple 2] [pear 3] [orange 7]] | uniq-by fruit
```
