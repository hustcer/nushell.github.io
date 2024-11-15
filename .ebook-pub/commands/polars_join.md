# polars join

**version**: 0.100.1

## **usage**:

Joins a lazy frame with other lazy frame.

## Signature

`> polars join (other) (left_on) (right_on) --inner --left --full --cross --suffix`

## Parameters

- `other`: LazyFrame to join with
- `left_on`: Left column(s) to join on
- `right_on`: Right column(s) to join on
- `--inner`: inner joining between lazyframes (default)
- `--left`: left join between lazyframes
- `--full`: full join between lazyframes
- `--cross`: cross join between lazyframes
- `--suffix {string}`: Suffix to use on columns with same name

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Join two lazy dataframes

```bash
> let df_a = ([[a b c];[1 "a" 0] [2 "b" 1] [1 "c" 2] [1 "c" 3]] | polars into-lazy);
    let df_b = ([["foo" "bar" "ham"];[1 "a" "let"] [2 "c" "var"] [3 "c" "const"]] | polars into-lazy);
    $df_a | polars join $df_b a foo | polars collect
```

Join one eager dataframe with a lazy dataframe

```bash
> let df_a = ([[a b c];[1 "a" 0] [2 "b" 1] [1 "c" 2] [1 "c" 3]] | polars into-df);
    let df_b = ([["foo" "bar" "ham"];[1 "a" "let"] [2 "c" "var"] [3 "c" "const"]] | polars into-lazy);
    $df_a | polars join $df_b a foo
```
