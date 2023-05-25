# skip while

**version**: 0.80.0

## **usage**:

Skip elements of the input while a predicate is true.

## Signature

`> skip while (predicate)`

## Parameters

- `predicate`: the predicate that skipped element must match

## Examples

Skip while the element is negative

```bash
> [-2 0 2 -1] | skip while {|x| $x < 0 }
```

Skip while the element is negative using stored condition

```bash
> let cond = {|x| $x < 0 }; [-2 0 2 -1] | skip while $cond
```

Skip while the field value is negative

```bash
> [{a: -2} {a: 0} {a: 2} {a: -1}] | skip while {|x| $x.a < 0 }
```
