# append

**version**: 0.93.0

## **usage**:

Append any number of rows to a table.

## Signature

`> append (row)`

## Parameters

- `row`: The row, list, or table to append.

## Input/output types:

| input | output      |
| ----- | ----------- |
| any   | list\<any\> |

## Examples

Append one int to a list

```bash
> [0 1 2 3] | append 4
```

Append a list to an item

```bash
> 0 | append [1 2 3]
```

Append a list of string to a string

```bash
> "a" | append ["b"]
```

Append three int items

```bash
> [0 1] | append [2 3 4]
```

Append ints and strings

```bash
> [0 1] | append [2 nu 4 shell]
```

Append a range of ints to a list

```bash
> [0 1] | append 2..4
```

## Notes

```text
Be aware that this command 'unwraps' lists passed to it. So, if you pass a variable to it,
and you want the variable's contents to be appended without being unwrapped, it's wise to
pre-emptively wrap the variable in a list, like so: `append [$val]`. This way, `append` will
only unwrap the outer list, and leave the variable's contents untouched.
```
