# to toml

**version**: 0.85.0

## **usage**:

Convert record into .toml text.

## Signature

`> to toml `

## Input/output types:

| input  | output |
| ------ | ------ |
| record | string |

## Examples

Outputs an TOML string representing the contents of this record

```bash
> {foo: 1 bar: 'qwe'} | to toml
```
