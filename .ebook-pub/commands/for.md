# for

**version**: 0.100.1

## **usage**:

Loop over a range.

## Signature

`> for (var_name) (range) (block)`

## Parameters

- `var_name`: Name of the looping variable.
- `range`: Range of the loop.
- `block`: The block to run.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Print the square of each integer

```bash
> for x in [1 2 3] { print ($x * $x) }
```

Work with elements of a range

```bash
> for $x in 1..3 { print $x }
```

Number each item and print a message

```bash
> for $it in (['bob' 'fred'] | enumerate) { print $"($it.index) is ($it.item)" }
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
