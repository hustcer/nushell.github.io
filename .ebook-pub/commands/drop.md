# drop

**version**: 0.80.0

## **usage**:

Remove items/rows from the end of the input list/table. Counterpart of `skip`. Opposite of `last`.

## Signature

`> drop (rows)`

## Parameters

- `rows`: The number of items to remove

## Examples

Remove the last item of a list

```bash
> [0,1,2,3] | drop
```

Remove zero item of a list

```bash
> [0,1,2,3] | drop 0
```

Remove the last two items of a list

```bash
> [0,1,2,3] | drop 2
```

Remove the last row in a table

```bash
> [[a, b]; [1, 2] [3, 4]] | drop 1
```
