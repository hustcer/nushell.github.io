# port

**version**: 0.90.2

## **usage**:

Get a free port from system.

## Signature

`> port (start) (end)`

## Parameters

- `start`: The start port to scan (inclusive).
- `end`: The end port to scan (inclusive).

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | int    |

## Examples

get a free port between 3121 and 4000

```bash
> port 3121 4000
```

get a free port from system

```bash
> port
```
