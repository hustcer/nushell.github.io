# view ir

**version**: 0.100.1

## **usage**:

View the compiled IR code for a block of code.

## Signature

`> view ir (target) --json --decl-id`

## Parameters

- `target`: The name or block to view compiled code for.
- `--json`: Dump the raw block data as JSON (unstable).
- `--decl-id`: Integer is a declaration ID rather than a block ID.

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Notes

```text
The target can be a closure, the name of a custom command, or an internal block
ID. Closure literals within IR dumps often reference the block by ID (e.g.
`closure(3231)`), so this provides an easy way to read the IR of any embedded
closures.

The --decl-id option is provided to use a declaration ID instead, which can be
found on `call` instructions. This is sometimes better than using the name, as
the declaration may not be in scope.
```
