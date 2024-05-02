# plugin list

**version**: 0.93.0

## **usage**:

List installed plugins.

## Signature

`> plugin list `

## Input/output types:

| input   | output                                                                                                       |
| ------- | ------------------------------------------------------------------------------------------------------------ |
| nothing | table\<name: string, is_running: bool, pid: int, filename: string, shell: string, commands: list\<string\>\> |

## Examples

List installed plugins.

```bash
> plugin list
```

Get process information for running plugins.

```bash
> ps | where pid in (plugin list).pid
```
