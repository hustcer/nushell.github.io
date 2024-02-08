# match

**version**: 0.90.2

## **usage**:

Conditionally run a block on a matched value.

## Signature

`> match (value) (match_block)`

## Parameters

- `value`: Value to check.
- `match_block`: Block to run if check succeeds.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Match on a value in range

```bash
> match 3 { 1..10 => 'yes!' }
```

Match on a field in a record

```bash
> match {a: 100} { {a: $my_value} => { $my_value } }
```

Match with a catch-all

```bash
> match 3 { 1 => { 'yes!' }, _ => { 'no!' } }
```

Match against a list

```bash
> match [1, 2, 3] { [$a, $b, $c] => { $a + $b + $c }, _ => 0 }
```

Match against pipeline input

```bash
> {a: {b: 3}} | match $in {{a: { $b }} => ($b + 10) }
```

Match with a guard

```bash
> match [1 2 3] {
        [$x, ..$y] if $x == 1 => { 'good list' },
        _ => { 'not a very good list' }
    }

```
