# into record

**version**: 0.80.0

## **usage**:

Convert value to record.

## Signature

`> into record `

## Examples

Convert from one row table to record

```bash
> [[value]; [false]] | into record
```

Convert from list to record

```bash
> [1 2 3] | into record
```

Convert from range to record

```bash
> 0..2 | into record
```

convert duration to record

```bash
> -500day | into record
```

convert record to record

```bash
> {a: 1, b: 2} | into record
```

convert date to record

```bash
> 2020-04-12T22:10:57+02:00 | into record
```
