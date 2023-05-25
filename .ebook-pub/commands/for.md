# for

**version**: 0.80.0

## **usage**:

Loop over a range.

## Signature

`> for (var_name) (range) (block) --numbered`

## Parameters

- `var_name`: name of the looping variable
- `range`: range of the loop
- `block`: the block to run
- `--numbered`: return a numbered item ($it.index and $it.item)

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```

## Examples

Echo the square of each integer

```bash
> for x in [1 2 3] { print ($x * $x) }
```

Work with elements of a range

```bash
> for $x in 1..3 { print $x }
```

Number each item and echo a message

```bash
> for $it in ['bob' 'fred'] --numbered { print $"($it.index) is ($it.item)" }
```
