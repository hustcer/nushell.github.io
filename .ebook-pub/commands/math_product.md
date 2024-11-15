# math product

**version**: 0.100.1

## **usage**:

Returns the product of a list of numbers or the products of each column of a table.

## Signature

`> math product `

## Input/output types:

| input          | output |
| -------------- | ------ |
| list\<number\> | number |
| range          | number |
| record         | record |
| table          | record |

## Examples

Compute the product of a list of numbers

```bash
> [2 3 3 4] | math product
```

Compute the product of each column in a table

```bash
> [[a b]; [1 2] [3 4]] | math product
```
