# echo

**version**: 0.80.0

## **usage**:

Returns its arguments, ignoring the piped-in value.

## Signature

`> echo ...rest`

## Parameters

- `...rest`: the values to echo

## Notes

```text
When given no arguments, it returns an empty string. When given one argument,
it returns it. Otherwise, it returns a list of the arguments. There is usually
little reason to use this over just writing the values as-is.
```

## Examples

Put a list of numbers in the pipeline. This is the same as [1 2 3].

```bash
> echo 1 2 3
```

Returns the piped-in value, by using the special $in variable to obtain it.

```bash
> echo $in
```
