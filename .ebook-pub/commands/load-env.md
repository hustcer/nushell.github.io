# load-env

**version**: 0.93.0

## **usage**:

Loads an environment update from a record.

## Signature

`> load-env (update)`

## Parameters

- `update`: The record to use for updates.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |
| record  | nothing |

## Examples

Load variables from an input stream

```bash
> {NAME: ABE, AGE: UNKNOWN} | load-env; $env.NAME
```

Load variables from an argument

```bash
> load-env {NAME: ABE, AGE: UNKNOWN}; $env.NAME
```
