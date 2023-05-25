# from yml

**version**: 0.80.0

## **usage**:

Parse text as .yaml/.yml and create table.

## Signature

`> from yml `

## Examples

Converts yaml formatted string to table

```bash
> 'a: 1' | from yaml
```

Converts yaml formatted string to table

```bash
> '[ a: 1, b: [1, 2] ]' | from yaml
```
