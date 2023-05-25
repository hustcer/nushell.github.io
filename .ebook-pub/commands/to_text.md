# to text

**version**: 0.80.0

## **usage**:

Converts data into simple text.

## Signature

`> to text `

## Examples

Outputs data as simple text

```bash
> 1 | to text
```

Outputs external data as simple text

```bash
> git help -a | lines | find -r '^ ' | to text
```

Outputs records as simple text

```bash
> ls | to text
```
