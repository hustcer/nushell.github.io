# reduce

**version**: 0.85.0

## **usage**:

Aggregate a list to a single value using an accumulator closure.

## Signature

`> reduce (closure) --fold`

## Parameters

- `closure`: reducing function
- `--fold {any}`: reduce with initial value

## Input/output types:

| input       | output |
| ----------- | ------ |
| list\<any\> | any    |
| range       | any    |
| table       | any    |

## Examples

Sum values of a list (same as 'math sum')

```bash
> [ 1 2 3 4 ] | reduce {|it, acc| $it + $acc }
```

Sum values of a list, plus their indexes

```bash
> [ 8 7 6 ] | enumerate | reduce -f 0 {|it, acc| $acc + $it.item + $it.index }
```

Sum values with a starting value (fold)

```bash
> [ 1 2 3 4 ] | reduce -f 10 {|it, acc| $acc + $it }
```

Replace selected characters in a string with 'X'

```bash
> [ i o t ] | reduce -f "Arthur, King of the Britons" {|it, acc| $acc | str replace -a $it "X" }
```

Add ascending numbers to each of the filenames, and join with semicolons.

```bash
> ['foo.gz', 'bar.gz', 'baz.gz'] | enumerate | reduce -f '' {|str all| $"($all)(if $str.index != 0 {'; '})($str.index + 1)-($str.item)" }
```

Concatenate a string with itself, using a range to determine the number of times.

```bash
> let s = "Str"; 0..2 | reduce -f '' {|it, acc| $acc + $s}
```
