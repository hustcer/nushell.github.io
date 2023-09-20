# which

**version**: 0.85.0

## **usage**:

Finds a program file, alias or custom command.

## Signature

`> which (application) ...rest --all`

## Parameters

- `application`: application
- `...rest`: additional applications
- `--all`: list all executables

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

Find if the 'myapp' application is available

```bash
> which myapp
```
