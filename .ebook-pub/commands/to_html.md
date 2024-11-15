# to html

**version**: 0.100.1

## **usage**:

Convert table into simple HTML.

## Signature

`> to html --html-color --no-color --dark --partial --theme --list`

## Parameters

- `--html-color`: change ansi colors to html colors
- `--no-color`: remove all ansi colors in output
- `--dark`: indicate your background color is a darker color
- `--partial`: only output the html for the content itself
- `--theme {string}`: the name of the theme to use (github, blulocolight, ...)
- `--list`: produce a color table of all available themes

## Input/output types:

| input   | output |
| ------- | ------ |
| any     | string |
| nothing | any    |

## Examples

Outputs an HTML string representing the contents of this table

```bash
> [[foo bar]; [1 2]] | to html
```

Optionally, only output the html for the content itself

```bash
> [[foo bar]; [1 2]] | to html --partial
```

Optionally, output the string with a dark background

```bash
> [[foo bar]; [1 2]] | to html --dark
```

## Notes

```text
Screenshots of the themes can be browsed here: https://github.com/mbadolato/iTerm2-Color-Schemes.
```
