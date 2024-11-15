# path split

**version**: 0.100.1

## **usage**:

Split a path into a list based on the system's path separator.

## Signature

`> path split `

## Input/output types:

| input          | output                 |
| -------------- | ---------------------- |
| list\<string\> | list\<list\<string\>\> |
| string         | list\<string\>         |

## Examples

Split a path into parts

```bash
> '/home/viking/spam.txt' | path split
```

Split paths in list into parts

```bash
> [ /home/viking/spam.txt /home/viking/eggs.txt ] | path split
```
