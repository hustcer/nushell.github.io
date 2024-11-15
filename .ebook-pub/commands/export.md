# export

**version**: 0.80.0

## **usage**:

Export definitions or environment variables from a module.

## Signature

`> export `

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```

## Examples

Export a definition from a module

```bash
> module utils { export def my-command [] { "hello" } }; use utils my-command; my-command
```
