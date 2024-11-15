# query web

**version**: 0.100.1

## **usage**:

execute selector query on html/web

## Signature

`> query web --query --as-html --attribute --as-table --inspect`

## Parameters

- `--query {string}`: selector query
- `--as-html`: return the query output as html
- `--attribute {any}`: downselect based on the given attribute
- `--as-table {list<string>}`: find table based on column header list
- `--inspect`: run in inspect mode to provide more information for determining column headers

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Retrieve all `<header>` elements from phoronix.com website

```bash
> http get https://phoronix.com | query web --query 'header' | flatten
```

Retrieve a html table from Wikipedia and parse it into a nushell table using table headers as guides

```bash
> http get https://en.wikipedia.org/wiki/List_of_cities_in_India_by_population |
        query web --as-table [City 'Population(2011)[3]' 'Population(2001)[3][a]' 'State or unionterritory' 'Reference']
```

Pass multiple css selectors to extract several elements within single query, group the query results together and rotate them to create a table

```bash
> http get https://www.nushell.sh | query web --query 'h2, h2 + p' | each {str join} | chunks 2 | each {rotate --ccw tagline description} | flatten
```

Retrieve a specific html attribute instead of the default text

```bash
> http get https://example.org | query web --query a --attribute href
```

Retrieve the OpenGraph properties (`<meta property="og:...">`) from a web page

```bash
> http get https://www.rust-lang.org | query web --query 'meta[property^="og:"]' --attribute [ property content ]
```
