# group

**version**: 0.93.0

## **usage**:

Groups input into groups of `group_size`.

## Signature

`> group (group_size)`

## Parameters

- `group_size`: The size of each group.

## Input/output types:

| input       | output              |
| ----------- | ------------------- |
| list\<any\> | list\<list\<any\>\> |

## Examples

Group the a list by pairs

```bash
> [1 2 3 4] | group 2
```
