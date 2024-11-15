# format duration

**version**: 0.100.1

## **usage**:

Outputs duration with a specified unit of time.

## Signature

`> format duration (format value) ...rest`

## Parameters

- `format value`: The unit in which to display the duration.
- `...rest`: For a data structure input, format duration at the given cell paths.

## Input/output types:

| input            | output         |
| ---------------- | -------------- |
| duration         | string         |
| list\<duration\> | list\<string\> |
| table            | table          |

## Examples

Convert µs duration to the requested second duration as a string

```bash
> 1000000µs | format duration sec
```

Convert durations to µs duration as strings

```bash
> [1sec 2sec] | format duration µs
```

Convert duration to µs as a string if unit asked for was us

```bash
> 1sec | format duration us
```
