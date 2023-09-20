# filter

**version**: 0.85.0

## **usage**:

Filter values based on a predicate closure.

## Signature

`> filter (closure)`

## Parameters

- `closure`: Predicate closure

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| range       | list\<any\> |
| table       | table       |

## Examples

Filter items of a list according to a condition

```bash
> [1 2] | filter {|x| $x > 1}
```

Filter rows of a table according to a condition

```bash
> [{a: 1} {a: 2}] | filter {|x| $x.a > 1}
```

Filter rows of a table according to a stored condition

```bash
> let cond = {|x| $x.a > 1}; [{a: 1} {a: 2}] | filter $cond
```

Filter items of a range according to a condition

```bash
> 9..13 | filter {|el| $el mod 2 != 0}
```

List all numbers above 3, using an existing closure condition

```bash
> let a = {$in > 3}; [1, 2, 5, 6] | filter $a
```

## Notes

```text
This command works similar to 'where' but allows reading the predicate closure from
a variable. On the other hand, the "row condition" syntax is not supported.
```
