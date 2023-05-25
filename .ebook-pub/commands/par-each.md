# par-each

**version**: 0.80.0

## **usage**:

Run a closure on each row of the input list in parallel, creating a new list with the results.

## Signature

`> par-each (closure) --threads`

## Parameters

- `closure`: the closure to run
- `--threads {int}`: the number of threads to use

## Examples

Multiplies each number. Note that the list will become arbitrarily disordered.

```bash
> [1 2 3] | par-each {|| 2 * $in }
```

Output can still be sorted afterward

```bash
> [foo bar baz] | par-each {|e| $e + '!' } | sort
```

Enumerate and sort-by can be used to reconstruct the original order

```bash
> 1..3 | enumerate | par-each {|p| update item ($p.item * 2)} | sort-by item | get item
```

Iterate over each element, producing a list showing indexes of any 2s

```bash
> [1 2 3] | enumerate | par-each { |e| if $e.item == 2 { $"found 2 at ($e.index)!"} }
```
