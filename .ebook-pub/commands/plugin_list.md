# plugin list

**version**: 0.100.1

## **usage**:

List loaded and installed plugins.

## Signature

`> plugin list --plugin-config --engine --registry`

## Parameters

- `--plugin-config {path}`: Use a plugin registry file other than the one set in `$nu.plugin-path`
- `--engine`: Show info for plugins that are loaded into the engine only.
- `--registry`: Show info for plugins from the registry file only.

## Input/output types:

| input   | output                                                                                                                      |
| ------- | --------------------------------------------------------------------------------------------------------------------------- |
| nothing | table\<name: string, version: string, status: string, pid: int, filename: string, shell: string, commands: list\<string\>\> |

## Examples

List installed plugins.

```bash
> plugin list
```

Get process information for running plugins.

```bash
> ps | where pid in (plugin list).pid
```

## Notes

```text
The `status` column will contain one of the following values:

- `added`:    The plugin is present in the plugin registry file, but not in
              the engine.
- `loaded`:   The plugin is present both in the plugin registry file and in
              the engine, but is not running.
- `running`:  The plugin is currently running, and the `pid` column should
              contain its process ID.
- `modified`: The plugin state present in the plugin registry file is different
              from the state in the engine.
- `removed`:  The plugin is still loaded in the engine, but is not present in
              the plugin registry file.
- `invalid`:  The data in the plugin registry file couldn't be deserialized,
              and the plugin most likely needs to be added again.

`running` takes priority over any other status. Unless `--registry` is used
or the plugin has not been loaded yet, the values of `version`, `filename`,
`shell`, and `commands` reflect the values in the engine and not the ones in
the plugin registry file.

See also: `plugin use`
```
