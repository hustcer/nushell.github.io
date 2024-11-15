# ansi

**version**: 0.93.0

## **usage**:

Output ANSI codes to change color and style of text.

## Signature

`> ansi (code) --escape --osc --list`

## Parameters

- `code`: The name of the code to use (from `ansi -l`).
- `--escape`: escape sequence without the escape character(s) ('\x1b[' is not required)
- `--osc`: operating system command (osc) escape sequence without the escape character(s) ('\x1b]' is not required)
- `--list`: list available ansi code names

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |

## Examples

Change color to green (see how the next example text will be green!)

```bash
> ansi green
```

Reset the color

```bash
> ansi reset
```

Use different colors and styles in the same text

```bash
> $'(ansi red_bold)Hello(ansi reset) (ansi green_dimmed)Nu(ansi reset) (ansi purple_italic)World(ansi reset)'
```

The same example as above with short names

```bash
> $'(ansi rb)Hello(ansi reset) (ansi gd)Nu(ansi reset) (ansi pi)World(ansi reset)'
```

Use escape codes, without the '\x1b['

```bash
> $"(ansi --escape '3;93;41m')Hello(ansi reset)"  # italic bright yellow on red background
```

Use structured escape codes

```bash
> let bold_blue_on_red = {  # `fg`, `bg`, `attr` are the acceptable keys, all other keys are considered invalid and will throw errors.
        fg: '#0000ff'
        bg: '#ff0000'
        attr: b
    }
    $"(ansi --escape $bold_blue_on_red)Hello, Nu World!(ansi reset)"
```

## Notes

```text
An introduction to what ANSI escape sequences are can be found in the
]8;;https://en.wikipedia.org/wiki/ANSI_escape_code\ANSI escape code]8;;\ Wikipedia page.

Escape sequences usual values:
╭────┬────────────┬────────┬────────┬─────────╮
│  # │    type    │ normal │ bright │  name   │
├────┼────────────┼────────┼────────┼─────────┤
│  0 │ foreground │     30 │     90 │ black   │
│  1 │ foreground │     31 │     91 │ red     │
│  2 │ foreground │     32 │     92 │ green   │
│  3 │ foreground │     33 │     93 │ yellow  │
│  4 │ foreground │     34 │     94 │ blue    │
│  5 │ foreground │     35 │     95 │ magenta │
│  5 │ foreground │     35 │     95 │ purple  │
│  6 │ foreground │     36 │     96 │ cyan    │
│  7 │ foreground │     37 │     97 │ white   │
│  8 │ foreground │     39 │        │ default │
│  9 │ background │     40 │    100 │ black   │
│ 10 │ background │     41 │    101 │ red     │
│ 11 │ background │     42 │    102 │ green   │
│ 12 │ background │     43 │    103 │ yellow  │
│ 13 │ background │     44 │    104 │ blue    │
│ 14 │ background │     45 │    105 │ magenta │
│ 14 │ background │     45 │    105 │ purple  │
│ 15 │ background │     46 │    106 │ cyan    │
│ 16 │ background │     47 │    107 │ white   │
│ 17 │ background │     49 │        │ default │
╰────┴────────────┴────────┴────────┴─────────╯

Escape sequences attributes:
╭───┬────┬──────────────┬──────────────────────────────╮
│ # │ id │ abbreviation │         description          │
├───┼────┼──────────────┼──────────────────────────────┤
│ 0 │  0 │              │ reset / normal display       │
│ 1 │  1 │ b            │ bold or increased intensity  │
│ 2 │  2 │ d            │ faint or decreased intensity │
│ 3 │  3 │ i            │ italic on (non-mono font)    │
│ 4 │  4 │ u            │ underline on                 │
│ 5 │  5 │ l            │ slow blink on                │
│ 6 │  6 │              │ fast blink on                │
│ 7 │  7 │ r            │ reverse video on             │
│ 8 │  8 │ h            │ nondisplayed (invisible) on  │
│ 9 │  9 │ s            │ strike-through on            │
╰───┴────┴──────────────┴──────────────────────────────╯

Operating system commands:
╭───┬─────┬───────────────────────────────────────╮
│ # │ id  │              description              │
├───┼─────┼───────────────────────────────────────┤
│ 0 │   0 │ Set window title and icon name        │
│ 1 │   1 │ Set icon name                         │
│ 2 │   2 │ Set window title                      │
│ 3 │   4 │ Set/read color palette                │
│ 4 │   9 │ iTerm2 Grown notifications            │
│ 5 │  10 │ Set foreground color (x11 color spec) │
│ 6 │  11 │ Set background color (x11 color spec) │
│ 7 │ ... │ others                                │
╰───┴─────┴───────────────────────────────────────╯
```

## Subcommands:

| name                                               | type    | usage                                                              |
| -------------------------------------------------- | ------- | ------------------------------------------------------------------ |
| [`ansi gradient`](/commands/docs/ansi_gradient.md) | Builtin | Add a color gradient (using ANSI color codes) to the given string. |
| [`ansi link`](/commands/docs/ansi_link.md)         | Builtin | Add a link (using OSC 8 escape sequence) to the given string.      |
| [`ansi strip`](/commands/docs/ansi_strip.md)       | Builtin | Strip ANSI escape sequences from a string.                         |
