# str replace

**version**: 0.80.0

## **usage**:

Find and replace text.

## Signature

`> str replace (find) (replace) ...rest --all --no-expand --string`

## Parameters

- `find`: the pattern to find
- `replace`: the replacement string
- `...rest`: For a data structure input, operate on strings at the given cell paths
- `--all`: replace all occurrences of the pattern
- `--no-expand`: do not expand capture groups (like $name) in the replacement string
- `--string`: match the pattern as a substring of the input, instead of a regular expression

## Examples

Find and replace contents with capture group

```bash
> 'my_library.rb' | str replace '(.+).rb' '$1.nu'
```

Find and replace all occurrences of find string

```bash
> 'abc abc abc' | str replace -a 'b' 'z'
```

Find and replace all occurrences of find string in table

```bash
> [[ColA ColB ColC]; [abc abc ads]] | str replace -a 'b' 'z' ColA ColC
```

Find and replace contents without using the replace parameter as a regular expression

```bash
> 'dogs_$1_cats' | str replace '\$1' '$2' -n
```

Find and replace the first occurrence using string replacement _not_ regular expressions

```bash
> 'c:\some\cool\path' | str replace 'c:\some\cool' '~' -s
```

Find and replace all occurrences using string replacement _not_ regular expressions

```bash
> 'abc abc abc' | str replace -a 'b' 'z' -s
```

Find and replace with fancy-regex

```bash
> 'a successful b' | str replace '\b([sS])uc(?:cs|s?)e(ed(?:ed|ing|s?)|ss(?:es|ful(?:ly)?|i(?:ons?|ve(?:ly)?)|ors?)?)\b' '${1}ucce$2'
```

Find and replace with fancy-regex

```bash
> 'GHIKK-9+*' | str replace '[*[:xdigit:]+]' 'z'
```
