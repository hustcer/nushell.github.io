# config reset

**version**: 0.93.0

## **usage**:

Reset nushell environment configurations to default, and saves old config files in the config location as oldconfig.nu and oldenv.nu.

## Signature

`> config reset --nu --env --without-backup`

## Parameters

- `--nu`: reset only nu config, config.nu
- `--env`: reset only env config, env.nu
- `--without-backup`: do not make a backup

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

reset nushell configuration files

```bash
> config reset
```
