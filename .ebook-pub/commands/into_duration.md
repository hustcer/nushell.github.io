# into duration

**version**: 0.80.0

## **usage**:

Convert value to duration.

## Signature

`> into duration ...rest --convert`

## Parameters

- `...rest`: for a data structure input, convert data at the given cell paths
- `--convert {string}`: convert duration into another duration

## Notes

```text
This command does not take leap years into account, and every month is assumed to have 30 days.
```

## Examples

Convert string to duration in table

```bash
> [[value]; ['1sec'] ['2min'] ['3hr'] ['4day'] ['5wk']] | into duration value
```

Convert string to duration

```bash
> '7min' | into duration
```

Convert string to the requested duration as a string

```bash
> '7min' | into duration --convert sec
```

Convert duration to duration

```bash
> 420sec | into duration
```

Convert duration to the requested duration as a string

```bash
> 420sec | into duration --convert ms
```

Convert µs duration to the requested duration as a string

```bash
> 1000000µs | into duration --convert sec
```

Convert duration to the µs duration as a string

```bash
> 1sec | into duration --convert µs
```

Convert duration to µs as a string if unit asked for was us

```bash
> 1sec | into duration --convert us
```
