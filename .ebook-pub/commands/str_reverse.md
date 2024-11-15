# str reverse

**version**: 0.100.1

## **usage**:

Reverse every string in the pipeline.

## Signature

`> str reverse ...rest`

## Parameters

- `...rest`: For a data structure input, reverse strings at the given cell paths.

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| record         | record         |
| string         | string         |
| table          | table          |

## Examples

Reverse a single string

```bash
> 'Nushell' | str reverse
```

Reverse multiple strings in a list

```bash
> ['Nushell' 'is' 'cool'] | str reverse
```
