# ast

**version**: 0.100.1

## **usage**:

Print the abstract syntax tree (ast) for a pipeline.

## Signature

`> ast (pipeline) --json --minify`

## Parameters

- `pipeline`: The pipeline to print the ast for.
- `--json`: serialize to json
- `--minify`: minify the nuon or json output

## Input/output types:

| input  | output |
| ------ | ------ |
| string | record |

## Examples

Print the ast of a string

```bash
> ast 'hello'
```

Print the ast of a pipeline

```bash
> ast 'ls | where name =~ README'
```

Print the ast of a pipeline with an error

```bash
> ast 'for x in 1..10 { echo $x '
```

Print the ast of a pipeline with an error, as json, in a nushell table

```bash
> ast 'for x in 1..10 { echo $x ' --json | get block | from json
```

Print the ast of a pipeline with an error, as json, minified

```bash
> ast 'for x in 1..10 { echo $x ' --json --minify
```
