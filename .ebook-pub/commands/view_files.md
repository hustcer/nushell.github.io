# view files

**version**: 0.90.2

## **usage**:

View the files registered in nushell's EngineState memory.

## Signature

`> view files `

## Input/output types:

| input   | output                                                     |
| ------- | ---------------------------------------------------------- |
| nothing | table\<filename: string, start: int, end: int, size: int\> |

## Examples

View the files registered in Nushell's EngineState memory

```bash
> view files
```

View how Nushell was originally invoked

```bash
> view files | get 0
```

## Notes

```text
These are files parsed and loaded at runtime.
```
