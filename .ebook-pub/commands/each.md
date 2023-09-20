# each

**version**: 0.85.0

## **usage**:

Run a closure on each row of the input list, creating a new list with the results.

## Signature

`> each (closure) --keep-empty`

## Parameters

- `closure`: the closure to run
- `--keep-empty`: keep empty result cells

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| any         | any         |
| list\<any\> | list\<any\> |
| table       | list\<any\> |

## Examples

Multiplies elements in the list

```bash
> [1 2 3] | each {|e| 2 * $e }
```

Produce a list of values in the record, converted to string

```bash
> {major:2, minor:1, patch:4} | values | each {|| into string }
```

Produce a list that has "two" for each 2 in the input

```bash
> [1 2 3 2] | each {|e| if $e == 2 { "two" } }
```

Iterate over each element, producing a list showing indexes of any 2s

```bash
> [1 2 3] | enumerate | each {|e| if $e.item == 2 { $"found 2 at ($e.index)!"} }
```

Iterate over each element, keeping null results

```bash
> [1 2 3] | each --keep-empty {|e| if $e == 2 { "found 2!"} }
```

## Notes

```text
Since tables are lists of records, passing a table into 'each' will
iterate over each record, not necessarily each cell within it.

Avoid passing single records to this command. Since a record is a
one-row structure, 'each' will only run once, behaving similar to 'do'.
To iterate over a record's values, try converting it to a table
with 'transpose' first.
```

## Subcommands:

| name                                         | type    | usage                                                                                                     |
| -------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| [`each while`](/commands/docs/each_while.md) | Builtin | Run a block on each row of the input list until a null is found, then create a new list with the results. |
