# module

**version**: 0.90.2

## **usage**:

Define a custom module.

## Signature

`> module (module) (block)`

## Parameters

- `module`: Module name or module path.
- `block`: Body of the module if 'module' parameter is not a module path.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Define a custom command in a module and call it

```bash
> module spam { export def foo [] { "foo" } }; use spam foo; foo
```

Define an environment variable in a module

```bash
> module foo { export-env { $env.FOO = "BAZ" } }; use foo; $env.FOO
```

Define a custom command that participates in the environment in a module and call it

```bash
> module foo { export def --env bar [] { $env.FOO_BAR = "BAZ" } }; use foo bar; bar; $env.FOO_BAR
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
