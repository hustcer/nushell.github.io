# plugin stop

**version**: 0.100.1

## **usage**:

Stop an installed plugin if it was running.

## Signature

`> plugin stop (name)`

## Parameters

- `name`: The name, or filename, of the plugin to stop

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Stop the plugin named `inc`.

```bash
> plugin stop inc
```

Stop the plugin with the filename `~/.cargo/bin/nu_plugin_inc`.

```bash
> plugin stop ~/.cargo/bin/nu_plugin_inc
```

Stop all plugins.

```bash
> plugin list | each { |p| plugin stop $p.name }
```
