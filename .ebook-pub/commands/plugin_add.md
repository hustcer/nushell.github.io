# plugin add

**version**: 0.93.0

## **usage**:

Add a plugin to the plugin registry file.

## Signature

`> plugin add (filename) --plugin-config --shell`

## Parameters

- `filename`: Path to the executable for the plugin
- `--plugin-config {path}`: Use a plugin registry file other than the one set in `$nu.plugin-path`
- `--shell {path}`: Use an additional shell program (cmd, sh, python, etc.) to run the plugin

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Run the `nu_plugin_inc` plugin from the current directory or $env.NU_PLUGIN_DIRS and install its signatures.

```bash
> plugin add nu_plugin_inc
```

Run the `nu_plugin_polars` plugin from the current directory or $env.NU_PLUGIN_DIRS, and install its signatures to the "polars.msgpackz" plugin registry file.

```bash
> plugin add --plugin-config polars.msgpackz nu_plugin_polars
```

## Notes

```text
This does not load the plugin commands into the scope - see `register` for that.

Instead, it runs the plugin to get its command signatures, and then edits the
plugin registry file (by default, `$nu.plugin-path`). The changes will be
apparent the next time `nu` is next launched with that plugin registry file.
```
