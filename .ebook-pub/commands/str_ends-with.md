# str ends-with

**version**: 0.80.0

## **usage**:

Check if an input ends with a string.

## Signature

`> str ends-with (string) ...rest --ignore-case`

## Parameters

- `string`: the string to match
- `...rest`: For a data structure input, check strings at the given cell paths, and replace with result
- `--ignore-case`: search is case insensitive

## Examples

Checks if string ends with '.rb'

```bash
> 'my_library.rb' | str ends-with '.rb'
```

Checks if string ends with '.txt'

```bash
> 'my_library.rb' | str ends-with '.txt'
```

Checks if string ends with '.RB', case-insensitive

```bash
> 'my_library.rb' | str ends-with -i '.RB'
```
