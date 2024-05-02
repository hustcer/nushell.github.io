# dfr join

**version**: 0.93.0

## **usage**:

Joins a lazy frame with other lazy frame.

## Signature

`> dfr join (other) (left_on) (right_on) --inner --left --outer --cross --suffix`

## Parameters

- `other`: LazyFrame to join with
- `left_on`: Left column(s) to join on
- `right_on`: Right column(s) to join on
- `--inner`: inner join between lazyframes (default)
- `--left`: left join between lazyframes
- `--outer`: outer join between lazyframes
- `--cross`: cross join between lazyframes
- `--suffix {string}`: Suffix to use on columns with same name

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Join two lazy dataframes

```bash
> let df_a = ([[a b c];[1 "a" 0] [2 "b" 1] [1 "c" 2] [1 "c" 3]] | dfr into-lazy);
    let df_b = ([["foo" "bar" "ham"];[1 "a" "let"] [2 "c" "var"] [3 "c" "const"]] | dfr into-lazy);
    $df_a | dfr join $df_b a foo | dfr collect
```

Join one eager dataframe with a lazy dataframe

```bash
> let df_a = ([[a b c];[1 "a" 0] [2 "b" 1] [1 "c" 2] [1 "c" 3]] | dfr into-df);
    let df_b = ([["foo" "bar" "ham"];[1 "a" "let"] [2 "c" "var"] [3 "c" "const"]] | dfr into-lazy);
    $df_a | dfr join $df_b a foo
```
