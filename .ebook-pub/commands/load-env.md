# load-env

**version**: 0.80.0

## **usage**:

Loads an environment update from a record.

## Signature

`> load-env (update)`

## Parameters

- `update`: the record to use for updates

## Examples

Load variables from an input stream

```bash
> {NAME: ABE, AGE: UNKNOWN} | load-env; $env.NAME
```

Load variables from an argument

```bash
> load-env {NAME: ABE, AGE: UNKNOWN}; $env.NAME
```
