# view source

**version**: 0.93.0

## **usage**:

View a block, module, or a definition.

## Signature

`> view source (item)`

## Parameters

- `item`: Name or block to view.

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Examples

View the source of a code block

```bash
> let abc = {|| echo 'hi' }; view source $abc
```

View the source of a custom command

```bash
> def hi [] { echo 'Hi!' }; view source hi
```

View the source of a custom command, which participates in the caller environment

```bash
> def --env foo [] { $env.BAR = 'BAZ' }; view source foo
```

View the source of a custom command with flags and arguments

```bash
> def test [a?:any --b:int ...rest:string] { echo 'test' }; view source test
```

View the source of a module

```bash
> module mod-foo { export-env { $env.FOO_ENV = 'BAZ' } }; view source mod-foo
```

View the source of an alias

```bash
> alias hello = echo hi; view source hello
```
