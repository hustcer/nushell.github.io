# history import

**version**: 0.100.1

## **usage**:

Import command line history

## Signature

`> history import `

## Input/output types:

| input          | output  |
| -------------- | ------- |
| list\<string\> | nothing |
| nothing        | nothing |
| table          | nothing |

## Examples

Append all items from history in the other format to the current history

```bash
> history import
```

Append `foo` to the current history

```bash
> echo foo | history import
```

Append `foo` ran from `/home` to the current history

```bash
> [[ command_line cwd ]; [ foo /home ]] | history import
```

## Notes

```text
Can import history from input, either successive command lines or more detailed records. If providing records, available fields are:
    command_line, id, start_timestamp, hostname, cwd, duration, exit_status.

If no input is provided, will import all history items from existing history in the other format: if current history is stored in sqlite, it will store it in plain text and vice versa.

Note that history item IDs are ignored when importing from file.
```
