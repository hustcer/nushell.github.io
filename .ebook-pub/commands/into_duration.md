# into duration

**version**: 0.90.2

## **usage**:

Convert value to duration.

## Signature

`> into duration ...rest --unit`

## Parameters

- `...rest`: For a data structure input, convert data at the given cell paths.
- `--unit {string}`: Unit to convert number into (will have an effect only with integer input)

## Input/output types:

| input    | output   |
| -------- | -------- |
| duration | duration |
| int      | duration |
| string   | duration |
| table    | table    |

## Examples

Convert duration string to duration value

```bash
> '7min' | into duration
```

Convert compound duration string to duration value

```bash
> '1day 2hr 3min 4sec' | into duration
```

Convert table of duration strings to table of duration values

```bash
> [[value]; ['1sec'] ['2min'] ['3hr'] ['4day'] ['5wk']] | into duration value
```

Convert duration to duration

```bash
> 420sec | into duration
```

Convert a number of ns to duration

```bash
> 1_234_567 | into duration
```

Convert a number of an arbitrary unit to duration

```bash
> 1_234 | into duration --unit ms
```

## Notes

```text
Max duration value is i64::MAX nanoseconds; max duration time unit is wk (weeks).
```
