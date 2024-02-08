# sleep

**version**: 0.90.2

## **usage**:

Delay for a specified amount of time.

## Signature

`> sleep (duration) ...rest`

## Parameters

- `duration`: Time to sleep.
- `...rest`: Additional time.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Sleep for 1sec

```bash
> sleep 1sec
```

Sleep for 3sec

```bash
> sleep 1sec 1sec 1sec
```

Send output after 1sec

```bash
> sleep 1sec; echo done
```
