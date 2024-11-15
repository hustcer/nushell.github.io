# reduce

**version**: 0.100.1

## **usage**:

Aggregate a list (starting from the left) to a single value using an accumulator closure.

## Signature

`> reduce (closure) --fold`

## Parameters

- `closure`: Reducing function.
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

`reduce` accumulates value from left to right, equivalent to (((1 - 2) - 3) - 4).

```bash
> [ 1 2 3 4 ] | reduce {|it, acc| $acc - $it }
```

Sum values of a list, plus their indexes

```bash
> [ 8 7 6 ] | enumerate | reduce --fold 0 {|it, acc| $acc + $it.item + $it.index }
```

Sum values with a starting value (fold)

```bash
> [ 1 2 3 4 ] | reduce --fold 10 {|it, acc| $acc + $it }
```

Iteratively perform string replace (from left to right): 'foobar' -> 'bazbar' -> 'quuxbar'

```bash
> [[foo baz] [baz quux]] | reduce --fold "foobar" {|it, acc| $acc | str replace $it.0 $it.1}
```

Replace selected characters in a string with 'X'

```bash
> [ i o t ] | reduce --fold "Arthur, King of the Britons" {|it, acc| $acc | str replace --all $it "X" }
```

Add ascending numbers to each of the filenames, and join with semicolons.

```bash
> ['foo.gz', 'bar.gz', 'baz.gz'] | enumerate | reduce --fold '' {|str all| $"($all)(if $str.index != 0 {'; '})($str.index + 1)-($str.item)" }
```

Concatenate a string with itself, using a range to determine the number of times.

```bash
> let s = "Str"; 0..2 | reduce --fold '' {|it, acc| $acc + $s}
```
