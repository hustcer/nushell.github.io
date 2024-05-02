# each while

**version**: 0.93.0

## **usage**:

Run a block on each row of the input list until a null is found, then create a new list with the results.

## Signature

`> each while (closure)`

## Parameters

- `closure`: the closure to run

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |

## Examples

Produces a list of each element before the 3, doubled

```bash
> [1 2 3 2 1] | each while {|e| if $e < 3 { $e * 2 } }
```

Output elements until reaching 'stop'

```bash
> [1 2 stop 3 4] | each while {|e| if $e != 'stop' { $"Output: ($e)" } }
```

Iterate over each element, printing the matching value and its index

```bash
> [1 2 3] | enumerate | each while {|e| if $e.item < 2 { $"value ($e.item) at ($e.index)!"} }
```
