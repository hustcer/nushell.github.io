# where

**version**: 0.80.0

## **usage**:

Filter values based on a row condition.

## Signature

`> where (row_condition)`

## Parameters

- `row_condition`: Filter condition

## Notes

```text
This command works similar to 'filter' but allows extra shorthands for working with
tables, known as "row conditions". On the other hand, reading the condition from a variable is
not supported.
```

## Examples

Filter rows of a table according to a condition

```bash
> [{a: 1} {a: 2}] | where a > 1
```

Filter items of a list according to a condition

```bash
> [1 2] | where {|x| $x > 1}
```

List all files in the current directory with sizes greater than 2kb

```bash
> ls | where size > 2kb
```

List only the files in the current directory

```bash
> ls | where type == file
```

List all files with names that contain "Car"

```bash
> ls | where name =~ "Car"
```

List all files that were modified in the last two weeks

```bash
> ls | where modified >= (date now) - 2wk
```

Find files whose filenames don't begin with the correct sequential number

```bash
> ls | where type == file | sort-by name -n | enumerate | where {|e| $e.item.name !~ $'^($e.index + 1)' } | each {|| get item }
```
