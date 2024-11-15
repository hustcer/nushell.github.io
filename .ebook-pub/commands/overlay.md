# overlay

**version**: 0.100.1

## **usage**:

Commands for manipulating overlays.

## Signature

`> overlay `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html

  You must use one of the following subcommands. Using this command as-is will only produce this help message.
```

## Subcommands:

| name                                             | type     | usage                                        |
| ------------------------------------------------ | -------- | -------------------------------------------- |
| [`overlay hide`](/commands/docs/overlay_hide.md) | keyword  | Hide an active overlay.                      |
| [`overlay list`](/commands/docs/overlay_list.md) | built-in | List all active overlays.                    |
| [`overlay new`](/commands/docs/overlay_new.md)   | keyword  | Create an empty overlay.                     |
| [`overlay use`](/commands/docs/overlay_use.md)   | keyword  | Use definitions from a module as an overlay. |
