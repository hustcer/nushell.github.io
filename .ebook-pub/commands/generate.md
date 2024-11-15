# generate

**version**: 0.100.1

## **usage**:

Generate a list of values by successively invoking a closure.

## Signature

`> generate (closure) (initial)`

## Parameters

- `closure`: Generator function.
- `initial`: Initial value.

## Input/output types:

| input   | output      |
| ------- | ----------- |
| nothing | list\<any\> |

## Examples

Generate a sequence of numbers

```bash
> generate {|i| if $i <= 10 { {out: $i, next: ($i + 2)} }} 0
```

Generate a continuous stream of Fibonacci numbers

```bash
> generate {|fib| {out: $fib.0, next: [$fib.1, ($fib.0 + $fib.1)]} } [0, 1]
```

Generate a continuous stream of Fibonacci numbers, using default parameters

```bash
> generate {|fib=[0, 1]| {out: $fib.0, next: [$fib.1, ($fib.0 + $fib.1)]} }
```

## Notes

```text
The generator closure accepts a single argument and returns a record
containing two optional keys: 'out' and 'next'. Each invocation, the 'out'
value, if present, is added to the stream. If a 'next' key is present, it is
used as the next argument to the closure, otherwise generation stops.

```
