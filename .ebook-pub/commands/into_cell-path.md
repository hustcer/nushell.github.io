# into cell-path

**version**: 0.93.0

## **usage**:

Convert value to a cell-path.

## Signature

`> into cell-path `

## Input/output types:

| input                                        | output    |
| -------------------------------------------- | --------- |
| int                                          | cell-path |
| list\<any\>                                  | cell-path |
| list\<record\<value: any, optional: bool\>\> | cell-path |

## Examples

Convert integer into cell path

```bash
> 5 | into cell-path
```

Convert string into cell path

```bash
> 'some.path' | split row '.' | into cell-path
```

Convert list into cell path

```bash
> [5 c 7 h] | into cell-path
```

Convert table into cell path

```bash
> [[value, optional]; [5 true] [c false]] | into cell-path
```

## Notes

```text
Converting a string directly into a cell path is intentionally not supported.
```
