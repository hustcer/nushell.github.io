# prepend

**version**: 0.100.1

## **usage**:

Prepend any number of rows to a table.

## Signature

`> prepend (row)`

## Parameters

- `row`: The row, list, or table to prepend.

## Input/output types:

| input | output      |
| ----- | ----------- |
| any   | list\<any\> |

## Examples

prepend a list to an item

```bash
> 0 | prepend [1 2 3]
```

Prepend a list of strings to a string

```bash
> "a" | prepend ["b"]
```

Prepend one int item

```bash
> [1 2 3 4] | prepend 0
```

Prepend two int items

```bash
> [2 3 4] | prepend [0 1]
```

Prepend ints and strings

```bash
> [2 nu 4 shell] | prepend [0 1 rocks]
```

Prepend a range

```bash
> [3 4] | prepend 0..2
```

## Notes

```text
Be aware that this command 'unwraps' lists passed to it. So, if you pass a variable to it,
and you want the variable's contents to be prepended without being unwrapped, it's wise to
pre-emptively wrap the variable in a list, like so: `prepend [$val]`. This way, `prepend` will
only unwrap the outer list, and leave the variable's contents untouched.
```
