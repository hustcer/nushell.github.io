# input

**version**: 0.80.0

## **usage**:

Get input from the user.

## Signature

`> input (prompt) --bytes-until --suppress-output`

## Parameters

- `prompt`: prompt to show the user
- `--bytes-until {string}`: read bytes (not text) until a stop byte
- `--suppress-output`: don't print keystroke values

## Examples

Get input from the user, and assign to a variable

```bash
> let user_input = (input)
```
