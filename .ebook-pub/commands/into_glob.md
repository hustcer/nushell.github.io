# into glob

**version**: 0.93.0

## **usage**:

Convert value to glob.

## Signature

`> into glob ...rest`

## Parameters

- `...rest`: For a data structure input, convert data at the given cell paths.

## Input/output types:

| input          | output       |
| -------------- | ------------ |
| list\<string\> | list\<glob\> |
| record         | record       |
| string         | glob         |
| table          | table        |

## Examples

convert string to glob

```bash
> '1234' | into glob
```

convert filepath to glob

```bash
> ls Cargo.toml | get name | into glob
```
