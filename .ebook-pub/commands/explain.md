# explain

**version**: 0.85.0

## **usage**:

Explain closure contents.

## Signature

`> explain (closure)`

## Parameters

- `closure`: the closure to run

## Input/output types:

| input   | output |
| ------- | ------ |
| any     | any    |
| nothing | any    |

## Examples

Explain a command within a closure

```bash
> explain {|| ls | sort-by name type -i | get name } | table -e
```
