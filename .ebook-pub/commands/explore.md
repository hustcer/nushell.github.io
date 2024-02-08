# explore

**version**: 0.90.2

## **usage**:

Explore acts as a table pager, just like `less` does for text.

## Signature

`> explore --head --index --reverse --peek`

## Parameters

- `--head {bool}`: Show or hide column headers (default true)
- `--index`: Show row indexes when viewing a list
- `--reverse`: Start with the viewport scrolled to the bottom
- `--peek`: When quitting, output the value of the cell the cursor was on

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Explore the system information record

```bash
> sys | explore
```

Explore the output of `ls` without column names

```bash
> ls | explore --head false
```

Explore a list of Markdown files' contents, with row indexes

```bash
> glob *.md | each {|| open } | explore --index
```

Explore a JSON file, then save the last visited sub-structure to a file

```bash
> open file.json | explore --peek | to json | save part.json
```

## Notes

```text
Press `:` then `h` to get a help menu.
```
