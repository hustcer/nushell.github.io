# plugin use

**version**: 0.93.0

## **usage**:

Load a plugin from the plugin registry file into scope.

## Signature

`> plugin use (name) --plugin-config`

## Parameters

- `name`: The name, or filename, of the plugin to load
- `--plugin-config {path}`: Use a plugin registry file other than the one set in `$nu.plugin-path`

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Load the commands for the `query` plugin from $nu.plugin-path

```bash
> plugin use query
```

Load the commands for the plugin with the filename `~/.cargo/bin/nu_plugin_query` from $nu.plugin-path

```bash
> plugin use ~/.cargo/bin/nu_plugin_query
```

Load the commands for the `query` plugin from a custom plugin registry file

```bash
> plugin use --plugin-config local-plugins.msgpackz query
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html

The plugin definition must be available in the plugin registry file at parse
time. Run `plugin add` first in the REPL to do this, or from a script consider
preparing a plugin registry file and passing `--plugin-config`, or using the
`--plugin` option to `nu` instead.

If the plugin was already loaded, this will reload the latest definition from
the registry file into scope.

Note that even if the plugin filename is specified, it will only be loaded if
it was already previously registered with `plugin add`.
```
