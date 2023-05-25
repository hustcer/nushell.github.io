# ansi link

**version**: 0.80.0

## **usage**:

Add a link (using OSC 8 escape sequence) to the given string.

## Signature

`> ansi link ...rest --text`

## Parameters

- `...rest`: for a data structure input, add links to all strings at the given cell paths
- `--text {string}`: Link text. Uses uri as text if absent. In case of
  tables, records and lists applies this text to all elements

## Examples

Create a link to open some file

```bash
> 'file:///file.txt' | ansi link --text 'Open Me!'
```

Create a link without text

```bash
> 'https://www.nushell.sh/' | ansi link
```

Format a table column into links

```bash
> [[url text]; [https://example.com Text]] | ansi link url
```
