# take while

**version**: 0.93.0

## **usage**:

Take elements of the input while a predicate is true.

## Signature

`> take while (predicate)`

## Parameters

- `predicate`: The predicate that element(s) must match.

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| table       | table       |

## Examples

Take while the element is negative

```bash
> [-1 -2 9 1] | take while {|x| $x < 0 }
```

Take while the element is negative using stored condition

```bash
> let cond = {|x| $x < 0 }; [-1 -2 9 1] | take while $cond
```

Take while the field value is negative

```bash
> [{a: -1} {a: -2} {a: 9} {a: 1}] | take while {|x| $x.a < 0 }
```
