# plugin

**version**: 0.93.0

## **usage**:

Commands for managing plugins.

## Signature

`> plugin `

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Run the `nu_plugin_inc` plugin from the current directory and install its signatures.

```bash
> plugin add nu_plugin_inc
```

Load (or reload) the `inc` plugin from the plugin registry file and put its
commands in scope. The plugin must already be in the registry file at parse
time.

```bash
> plugin use inc
```

List installed plugins

```bash
> plugin list
```

Stop the plugin named `inc`.

```bash
> plugin stop inc
```

Remove the installed signatures for the `inc` plugin.

```bash
> plugin rm inc
```

## Subcommands:

| name                                           | type    | usage                                                   |
| ---------------------------------------------- | ------- | ------------------------------------------------------- |
| [`plugin add`](/commands/docs/plugin_add.md)   | Builtin | Add a plugin to the plugin registry file.               |
| [`plugin list`](/commands/docs/plugin_list.md) | Builtin | List installed plugins.                                 |
| [`plugin rm`](/commands/docs/plugin_rm.md)     | Builtin | Remove a plugin from the plugin registry file.          |
| [`plugin stop`](/commands/docs/plugin_stop.md) | Builtin | Stop an installed plugin if it was running.             |
| [`plugin use`](/commands/docs/plugin_use.md)   | Builtin | Load a plugin from the plugin registry file into scope. |
