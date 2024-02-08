# debug

**version**: 0.90.2

## **usage**:

Debug print the value(s) piped in.

## Signature

`> debug --raw`

## Parameters

- `--raw`: Prints the raw value representation

## Input/output types:

| input       | output         |
| ----------- | -------------- |
| any         | string         |
| list\<any\> | list\<string\> |

## Examples

Debug print a string

```bash
> 'hello' | debug
```

Debug print a list

```bash
> ['hello'] | debug
```

Debug print a table

```bash
> [[version patch]; ['0.1.0' false] ['0.1.1' true] ['0.2.0' false]] | debug
```

## Subcommands:

| name                                         | type    | usage                     |
| -------------------------------------------- | ------- | ------------------------- |
| [`debug info`](/commands/docs/debug_info.md) | Builtin | View process memory info. |
