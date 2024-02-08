# sys

**version**: 0.90.2

## **usage**:

View information about the system.

## Signature

`> sys `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | record |

## Examples

Show info about the system

```bash
> sys
```

Show the os system name with get

```bash
> (sys).host | get name
```

Show the os system name

```bash
> (sys).host.name
```
