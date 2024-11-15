# to text

**version**: 0.100.1

## **usage**:

Converts data into simple text.

## Signature

`> to text --no-newline`

## Parameters

- `--no-newline`: Do not append a newline to the end of the text

## Input/output types:

| input | output |
| ----- | ------ |
| any   | string |

## Examples

Outputs data as simple text with a trailing newline

```bash
> [1] | to text
```

Outputs data as simple text without a trailing newline

```bash
> [1] | to text --no-newline
```

Outputs external data as simple text

```bash
> git help -a | lines | find -r '^ ' | to text
```

Outputs records as simple text

```bash
> ls | to text
```
