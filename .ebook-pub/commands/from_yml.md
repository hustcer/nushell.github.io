# from yml

**version**: 0.90.2

## **usage**:

Parse text as .yaml/.yml and create table.

## Signature

`> from yml `

## Input/output types:

| input  | output |
| ------ | ------ |
| string | any    |

## Examples

Converts yaml formatted string to table

```bash
> 'a: 1' | from yaml
```

Converts yaml formatted string to table

```bash
> '[ a: 1, b: [1, 2] ]' | from yaml
```
