# find

**version**: 0.100.1

## **usage**:

Searches terms in the input.

## Signature

`> find ...rest --regex --ignore-case --multiline --dotall --columns --invert`

## Parameters

- `...rest`: Terms to search.
- `--regex {string}`: regex to match with
- `--ignore-case`: case-insensitive regex mode; equivalent to (?i)
- `--multiline`: multi-line regex mode: ^ and $ match begin/end of line; equivalent to (?m)
- `--dotall`: dotall regex mode: allow a dot . to match newlines \n; equivalent to (?s)
- `--columns {list<string>}`: column names to be searched (with rest parameter, not regex yet)
- `--invert`: invert the match

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| string      | any         |

## Examples

Search for multiple terms in a command output

```bash
> ls | find toml md sh
```

Search and highlight text for a term in a string. Note that regular search is case insensitive

```bash
> 'Cargo.toml' | find cargo
```

Search a number or a file size in a list of numbers

```bash
> [1 5 3kb 4 3Mb] | find 5 3kb
```

Search a char in a list of string

```bash
> [moe larry curly] | find l
```

Find using regex

```bash
> [abc bde arc abf] | find --regex "ab"
```

Find using regex case insensitive

```bash
> [aBc bde Arc abf] | find --regex "ab" -i
```

Find value in records using regex

```bash
> [[version name]; ['0.1.0' nushell] ['0.1.1' fish] ['0.2.0' zsh]] | find --regex "nu"
```

Find inverted values in records using regex

```bash
> [[version name]; ['0.1.0' nushell] ['0.1.1' fish] ['0.2.0' zsh]] | find --regex "nu" --invert
```

Find value in list using regex

```bash
> [["Larry", "Moe"], ["Victor", "Marina"]] | find --regex "rr"
```

Find inverted values in records using regex

```bash
> [["Larry", "Moe"], ["Victor", "Marina"]] | find --regex "rr" --invert
```

Remove ANSI sequences from result

```bash
> [[foo bar]; [abc 123] [def 456]] | find 123 | get bar | ansi strip
```

Find and highlight text in specific columns

```bash
> [[col1 col2 col3]; [moe larry curly] [larry curly moe]] | find moe --columns [col1]
```
