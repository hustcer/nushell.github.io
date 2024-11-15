# split cell-path

**version**: 0.100.1

## **usage**:

Split a cell-path into its components.

## Signature

`> split cell-path `

## Input/output types:

| input     | output      |
| --------- | ----------- |
| cell-path | list\<any\> |

## Examples

Split a cell-path into its components

```bash
> $.5?.c | split cell-path
```

Split a complex cell-path

```bash
> $.a.b?.1."2"."c.d" | split cell-path
```
