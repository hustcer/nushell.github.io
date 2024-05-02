# register

**version**: 0.93.0

## **usage**:

Register a plugin.

## Signature

`> register (plugin) (signature) --shell`

## Parameters

- `plugin`: Path of executable for plugin.
- `signature`: Block with signature description as json object.
- `--shell {path}`: path of shell used to run plugin (cmd, sh, python, etc)

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Register `nu_plugin_query` plugin from ~/.cargo/bin/ dir

```bash
> register ~/.cargo/bin/nu_plugin_query
```

Register `nu_plugin_query` plugin from `nu -c` (writes/updates $nu.plugin-path)

```bash
> let plugin = ((which nu).path.0 | path dirname | path join 'nu_plugin_query'); nu -c $'register ($plugin); version'
```

## Notes

```text
Deprecated in favor of `plugin add` and `plugin use`.

This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
