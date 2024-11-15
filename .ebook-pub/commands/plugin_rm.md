# plugin rm

**version**: 0.100.1

## **usage**:

Remove a plugin from the plugin registry file.

## Signature

`> plugin rm (name) --plugin-config --force`

## Parameters

- `name`: The name, or filename, of the plugin to remove
- `--plugin-config {path}`: Use a plugin registry file other than the one set in `$nu.plugin-path`
- `--force`: Don't cause an error if the plugin name wasn't found in the file

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Remove the installed signatures for the `inc` plugin.

```bash
> plugin rm inc
```

Remove the installed signatures for the plugin with the filename `~/.cargo/bin/nu_plugin_inc`.

```bash
> plugin rm ~/.cargo/bin/nu_plugin_inc
```

Remove the installed signatures for the `polars` plugin from the "polars.msgpackz" plugin registry file.

```bash
> plugin rm --plugin-config polars.msgpackz polars
```

## Notes

```text
This does not remove the plugin commands from the current scope or from `plugin
list` in the current shell. It instead removes the plugin from the plugin
registry file (by default, `$nu.plugin-path`). The changes will be apparent the
next time `nu` is launched with that plugin registry file.

This can be useful for removing an invalid plugin signature, if it can't be
fixed with `plugin add`.
```
