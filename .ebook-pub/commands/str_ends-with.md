# str ends-with

**version**: 0.93.0

## **usage**:

Check if an input ends with a string.

## Signature

`> str ends-with (string) ...rest --ignore-case`

## Parameters

- `string`: The string to match.
- `...rest`: For a data structure input, check strings at the given cell paths, and replace with result.
- `--ignore-case`: search is case insensitive

## Input/output types:

| input          | output       |
| -------------- | ------------ |
| list\<string\> | list\<bool\> |
| record         | record       |
| string         | bool         |
| table          | table        |

## Examples

Checks if string ends with '.rb'

```bash
> 'my_library.rb' | str ends-with '.rb'
```

Checks if strings end with '.txt'

```bash
> ['my_library.rb', 'README.txt'] | str ends-with '.txt'
```

Checks if string ends with '.RB', case-insensitive

```bash
> 'my_library.rb' | str ends-with --ignore-case '.RB'
```
