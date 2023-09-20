# uniq

**version**: 0.85.0

## **usage**:

Return the distinct values in the input.

## Signature

`> uniq --count --repeated --ignore-case --unique`

## Parameters

- `--count`: Return a table containing the distinct input values together with their counts
- `--repeated`: Return the input values that occur more than once
- `--ignore-case`: Compare input values case-insensitively
- `--unique`: Return the input values that occur once only

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |

## Examples

Return the distinct values of a list/table (remove duplicates so that each value occurs once only)

```bash
> [2 3 3 4] | uniq
```

Return the input values that occur more than once

```bash
> [1 2 2] | uniq -d
```

Return the input values that occur once only

```bash
> [1 2 2] | uniq -u
```

Ignore differences in case when comparing input values

```bash
> ['hello' 'goodbye' 'Hello'] | uniq -i
```

Return a table containing the distinct input values together with their counts

```bash
> [1 2 2] | uniq -c
```
