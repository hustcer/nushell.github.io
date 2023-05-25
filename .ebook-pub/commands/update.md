# update

**version**: 0.80.0

## **usage**:

Update an existing column to have a new value.

## Signature

`> update (field) (replacement value)`

## Parameters

- `field`: the name of the column to update
- `replacement value`: the new value to give the cell(s), or a closure to create the value

## Examples

Update a column value

```bash
> {'name': 'nu', 'stars': 5} | update name 'Nushell'
```

Use in closure form for more involved updating logic

```bash
> [[count fruit]; [1 'apple']] | enumerate | update item.count {|e| ($e.item.fruit | str length) + $e.index } | get item
```

Alter each value in the 'authors' column to use a single string instead of a list

```bash
> [[project, authors]; ['nu', ['Andrés', 'JT', 'Yehuda']]] | update authors {|row| $row.authors | str join ','}
```

You can also use a simple command to update 'authors' to a single string

```bash
> [[project, authors]; ['nu', ['Andrés', 'JT', 'Yehuda']]] | update authors {|| str join ','}
```
