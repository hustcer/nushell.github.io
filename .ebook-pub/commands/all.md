# all

**version**: 0.85.0

## **usage**:

Test if every element of the input fulfills a predicate expression.

## Signature

`> all (predicate)`

## Parameters

- `predicate`: a closure that must evaluate to a boolean

## Input/output types:

| input       | output |
| ----------- | ------ |
| list\<any\> | bool   |
| table       | bool   |

## Examples

Check if each row's status is the string 'UP'

```bash
> [[status]; [UP] [UP]] | all {|el| $el.status == UP }
```

Check that each item is a string

```bash
> [foo bar 2 baz] | all {|| ($in | describe) == 'string' }
```

Check that all values are equal to twice their index

```bash
> [0 2 4 6] | enumerate | all {|i| $i.item == $i.index * 2 }
```

Check that all of the values are even, using a stored closure

```bash
> let cond = {|el| ($el mod 2) == 0 }; [2 4 6 8] | all $cond
```
