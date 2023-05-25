# explain

**version**: 0.80.0

## **usage**:

Explain closure contents.

## Signature

`> explain (closure)`

## Parameters

- `closure`: the closure to run

## Examples

Explain a command within a closure

```bash
> explain {|| ls | sort-by name type -i | get name } | table -e
```
