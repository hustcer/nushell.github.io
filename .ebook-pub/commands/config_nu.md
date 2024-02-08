# config nu

**version**: 0.90.2

## **usage**:

Edit nu configurations.

## Signature

`> config nu --default`

## Parameters

- `--default`: Print default `config.nu` file instead.

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |

## Examples

allow user to open and update nu config

```bash
> config nu
```

allow user to print default `config.nu` file

```bash
> config nu --default,
```

allow saving the default `config.nu` locally

```bash
> config nu --default | save -f ~/.config/nushell/default_config.nu
```
