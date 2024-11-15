# into record

**version**: 0.100.1

## **usage**:

Convert value to record.

## Signature

`> into record `

## Input/output types:

| input       | output |
| ----------- | ------ |
| datetime    | record |
| duration    | record |
| list\<any\> | record |
| record      | record |

## Examples

Convert from one row table to record

```bash
> [[value]; [false]] | into record
```

Convert from list of records to record

```bash
> [{foo: bar} {baz: quux}] | into record
```

Convert from list of pairs into record

```bash
> [[foo bar] [baz quux]] | into record
```

convert duration to record (weeks max)

```bash
> (-500day - 4hr - 5sec) | into record
```

convert record to record

```bash
> {a: 1, b: 2} | into record
```

convert date to record

```bash
> 2020-04-12T22:10:57+02:00 | into record
```
