# any

**version**: 0.85.0

## **usage**:

Tests if any element of the input fulfills a predicate expression.

## Signature

`> any (predicate)`

## Parameters

- `predicate`: a closure that must evaluate to a boolean

## Input/output types:

| input       | output |
| ----------- | ------ |
| list\<any\> | bool   |
| table       | bool   |

## Examples

Check if any row's status is the string 'DOWN'

```bash
> [[status]; [UP] [DOWN] [UP]] | any {|el| $el.status == DOWN }
```

Check that any item is a string

```bash
> [1 2 3 4] | any {|| ($in | describe) == 'string' }
```

Check if any value is equal to twice its own index

```bash
> [9 8 7 6] | enumerate | any {|i| $i.item == $i.index * 2 }
```

Check if any of the values are odd, using a stored closure

```bash
> let cond = {|e| $e mod 2 == 1 }; [2 4 1 6 8] | any $cond
```
