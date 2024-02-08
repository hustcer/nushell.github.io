# skip until

**version**: 0.90.2

## **usage**:

Skip elements of the input until a predicate is true.

## Signature

`> skip until (predicate)`

## Parameters

- `predicate`: The predicate that skipped element must not match.

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| table       | table       |

## Examples

Skip until the element is positive

```bash
> [-2 0 2 -1] | skip until {|x| $x > 0 }
```

Skip until the element is positive using stored condition

```bash
> let cond = {|x| $x > 0 }; [-2 0 2 -1] | skip until $cond
```

Skip until the field value is positive

```bash
> [{a: -2} {a: 0} {a: 2} {a: -1}] | skip until {|x| $x.a > 0 }
```
