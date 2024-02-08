# which

**version**: 0.90.2

## **usage**:

Finds a program file, alias or custom command.

## Signature

`> which (application) ...rest --all`

## Parameters

- `application`: Application.
- `...rest`: Additional applications.
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
