# take until

**version**: 0.85.0

## **usage**:

Take elements of the input until a predicate is true.

## Signature

`> take until (predicate)`

## Parameters

- `predicate`: the predicate that element(s) must not match

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| table       | table       |

## Examples

Take until the element is positive

```bash
> [-1 -2 9 1] | take until {|x| $x > 0 }
```

Take until the element is positive using stored condition

```bash
> let cond = {|x| $x > 0 }; [-1 -2 9 1] | take until $cond
```

Take until the field value is positive

```bash
> [{a: -1} {a: -2} {a: 9} {a: 1}] | take until {|x| $x.a > 0 }
```
