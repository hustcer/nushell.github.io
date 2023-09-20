# str replace

**version**: 0.85.0

## **usage**:

Find and replace text.

## Signature

`> str replace (find) (replace) ...rest --all --no-expand --regex --multiline`

## Parameters

- `find`: the pattern to find
- `replace`: the replacement string
- `...rest`: For a data structure input, operate on strings at the given cell paths
- `--all`: replace all occurrences of the pattern
- `--no-expand`: do not expand capture groups (like $name) in the replacement string
- `--regex`: match the pattern as a regular expression in the input, instead of a substring
- `--multiline`: multi-line regex mode (implies --regex): ^ and $ match begin/end of line; equivalent to (?m)

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| record         | record         |
| string         | string         |
| table          | table          |

## Examples

Find and replace the first occurrence of a substring

```bash
> 'c:\some\cool\path' | str replace 'c:\some\cool' '~'
```

Find and replace all occurrences of a substring

```bash
> 'abc abc abc' | str replace -a 'b' 'z'
```

Find and replace contents with capture group using regular expression

```bash
> 'my_library.rb' | str replace -r '(.+).rb' '$1.nu'
```

Find and replace all occurrences of find string using regular expression

```bash
> 'abc abc abc' | str replace -ar 'b' 'z'
```

Find and replace all occurrences of find string in table using regular expression

```bash
> [[ColA ColB ColC]; [abc abc ads]] | str replace -ar 'b' 'z' ColA ColC
```

Find and replace all occurrences of find string in record using regular expression

```bash
> { KeyA: abc, KeyB: abc, KeyC: ads } | str replace -ar 'b' 'z' KeyA KeyC
```

Find and replace contents without using the replace parameter as a regular expression

```bash
> 'dogs_$1_cats' | str replace -r '\$1' '$2' -n
```

Use captures to manipulate the input text using regular expression

```bash
> "abc-def" | str replace -r "(.+)-(.+)" "${2}_${1}"
```

Find and replace with fancy-regex using regular expression

```bash
> 'a successful b' | str replace -r '\b([sS])uc(?:cs|s?)e(ed(?:ed|ing|s?)|ss(?:es|ful(?:ly)?|i(?:ons?|ve(?:ly)?)|ors?)?)\b' '${1}ucce$2'
```

Find and replace with fancy-regex using regular expression

```bash
> 'GHIKK-9+*' | str replace -r '[*[:xdigit:]+]' 'z'
```

Find and replace on individual lines using multiline regular expression

```bash
> "non-matching line\n123. one line\n124. another line\n" | str replace -am '^[0-9]+\. ' ''
```
