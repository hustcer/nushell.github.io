# str join

**version**: 0.90.2

## **usage**:

Concatenate multiple strings into a single string, with an optional separator between each.

## Signature

`> str join (separator)`

## Parameters

- `separator`: Optional separator to use when creating string.

## Input/output types:

| input       | output |
| ----------- | ------ |
| list\<any\> | string |
| string      | string |

## Examples

Create a string from input

```bash
> ['nu', 'shell'] | str join
```

Create a string from input with a separator

```bash
> ['nu', 'shell'] | str join '-'
```
