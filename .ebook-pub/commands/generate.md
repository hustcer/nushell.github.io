# generate

**version**: 0.90.2

## **usage**:

Generate a list of values by successively invoking a closure.

## Signature

`> generate (initial) (closure)`

## Parameters

- `initial`: Initial value.
- `closure`: Generator function.

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| nothing     | list\<any\> |

## Examples

Generate a sequence of numbers

```bash
> generate 0 {|i| if $i <= 10 { {out: $i, next: ($i + 2)} }}
```

Generate a stream of fibonacci numbers

```bash
> generate [0, 1] {|fib| {out: $fib.0, next: [$fib.1, ($fib.0 + $fib.1)]} } | first 10
```

## Notes

```text
The generator closure accepts a single argument and returns a record
containing two optional keys: 'out' and 'next'. Each invocation, the 'out'
value, if present, is added to the stream. If a 'next' key is present, it is
used as the next argument to the closure, otherwise generation stops.

```
