# str join

**version**: 0.80.0

## **usage**:

Concatenate multiple strings into a single string, with an optional separator between each.

## Signature

`> str join (separator)`

## Parameters

- `separator`: optional separator to use when creating string

## Examples

Create a string from input

```bash
> ['nu', 'shell'] | str join
```

Create a string from input with a separator

```bash
> ['nu', 'shell'] | str join '-'
```
