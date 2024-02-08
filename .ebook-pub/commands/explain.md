# explain

**version**: 0.90.2

## **usage**:

Explain closure contents.

## Signature

`> explain (closure)`

## Parameters

- `closure`: The closure to run.

## Input/output types:

| input   | output |
| ------- | ------ |
| any     | any    |
| nothing | any    |

## Examples

Explain a command within a closure

```bash
> explain {|| ls | sort-by name type --ignore-case | get name } | table --expand
```
