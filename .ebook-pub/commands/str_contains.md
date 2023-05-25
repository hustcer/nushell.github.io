# str contains

**version**: 0.80.0

## **usage**:

Checks if string input contains a substring.

## Signature

`> str contains (string) ...rest --ignore-case --not`

## Parameters

- `string`: the substring to find
- `...rest`: For a data structure input, check strings at the given cell paths, and replace with result
- `--ignore-case`: search is case insensitive
- `--not`: does not contain

## Examples

Check if input contains string

```bash
> 'my_library.rb' | str contains '.rb'
```

Check if input contains string case insensitive

```bash
> 'my_library.rb' | str contains -i '.RB'
```

Check if input contains string in a table

```bash
>  [[ColA ColB]; [test 100]] | str contains 'e' ColA
```

Check if input contains string in a table

```bash
>  [[ColA ColB]; [test 100]] | str contains -i 'E' ColA
```

Check if input contains string in a table

```bash
>  [[ColA ColB]; [test hello]] | str contains 'e' ColA ColB
```

Check if input string contains 'banana'

```bash
> 'hello' | str contains 'banana'
```

Check if list contains string

```bash
> [one two three] | str contains o
```

Check if list does not contain string

```bash
> [one two three] | str contains -n o
```
