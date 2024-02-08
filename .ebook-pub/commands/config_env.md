# config env

**version**: 0.90.2

## **usage**:

Edit nu environment configurations.

## Signature

`> config env --default`

## Parameters

- `--default`: Print default `env.nu` file instead.

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |

## Examples

allow user to open and update nu env

```bash
> config env
```

allow user to print default `env.nu` file

```bash
> config env --default,
```

allow saving the default `env.nu` locally

```bash
> config env --default | save -f ~/.config/nushell/default_env.nu
```
