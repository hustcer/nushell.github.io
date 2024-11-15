# timeit

**version**: 0.100.1

## **usage**:

Time the running time of a block.

## Signature

`> timeit (command)`

## Parameters

- `command`: The command or block to run.

## Input/output types:

| input   | output   |
| ------- | -------- |
| any     | duration |
| nothing | duration |

## Examples

Times a command within a closure

```bash
> timeit { sleep 500ms }
```

Times a command using an existing input

```bash
> http get https://www.nushell.sh/book/ | timeit { split chars }
```

Times a command invocation

```bash
> timeit ls -la
```
