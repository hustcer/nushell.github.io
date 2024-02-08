# def

**version**: 0.90.2

## **usage**:

Define a custom command.

## Signature

`> def (def_name) (params) (block) --env --wrapped`

## Parameters

- `def_name`: Command name.
- `params`: Parameters.
- `block`: Body of the definition.
- `--env`: keep the environment defined inside the command
- `--wrapped`: treat unknown flags and arguments as strings (requires ...rest-like parameter in signature)

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Define a command and run it

```bash
> def say-hi [] { echo 'hi' }; say-hi
```

Define a command and run it with parameter(s)

```bash
> def say-sth [sth: string] { echo $sth }; say-sth hi
```

Set environment variable by call a custom command

```bash
> def --env foo [] { $env.BAR = "BAZ" }; foo; $env.BAR
```

Define a custom wrapper for an external command

```bash
> def --wrapped my-echo [...rest] { echo $rest }; my-echo spam
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
