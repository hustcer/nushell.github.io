# use

**version**: 0.80.0

## **usage**:

Use definitions from a module, making them available in your shell.

## Signature

`> use (module) ...rest`

## Parameters

- `module`: Module or module file
- `...rest`: Which members of the module to import

## Notes

```text
See `help std` for the standard library module.
See `help modules` to list all available modules.

This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```

## Examples

Define a custom command in a module and call it

```bash
> module spam { export def foo [] { "foo" } }; use spam foo; foo
```

Define a custom command that participates in the environment in a module and call it

```bash
> module foo { export def-env bar [] { let-env FOO_BAR = "BAZ" } }; use foo bar; bar; $env.FOO_BAR
```

Use a plain module name to import its definitions qualified by the module name

```bash
> module spam { export def foo [] { "foo" }; export def bar [] { "bar" } }; use spam; (spam foo) + (spam bar)
```

Specify \* to use all definitions in a module

```bash
> module spam { export def foo [] { "foo" }; export def bar [] { "bar" } }; use spam *; (foo) + (bar)
```

To use commands with spaces, like subcommands, surround them with quotes

```bash
> module spam { export def 'foo bar' [] { "baz" } }; use spam 'foo bar'; foo bar
```

To use multiple definitions from a module, wrap them in a list

```bash
> module spam { export def foo [] { "foo" }; export def 'foo bar' [] { "baz" } }; use spam ['foo', 'foo bar']; (foo) + (foo bar)
```
