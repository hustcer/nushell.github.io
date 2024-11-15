# sys temp

**version**: 0.100.1

## **usage**:

View the temperatures of system components.

## Signature

`> sys temp `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

Show the system temperatures

```bash
> sys temp
```

## Notes

```text
Some system components do not support temperature readings, so this command may return an empty list if no components support temperature.
```
