# polars

**version**: 0.100.1

## **usage**:

Operate with data in a dataframe format.

## Signature

`> polars `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Notes

```text
You must use one of the following subcommands. Using this command as-is will only produce this help message.
```

## Subcommands:

| name                                                                 | type   | usage                                                                                                                                                                                          |
| -------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`polars agg`](/commands/docs/polars_agg.md)                         | plugin | Performs a series of aggregations from a group-by.                                                                                                                                             |
| [`polars agg-groups`](/commands/docs/polars_agg-groups.md)           | plugin | Creates an agg_groups expression.                                                                                                                                                              |
| [`polars all-false`](/commands/docs/polars_all-false.md)             | plugin | Returns true if all values are false.                                                                                                                                                          |
| [`polars all-true`](/commands/docs/polars_all-true.md)               | plugin | Returns true if all values are true.                                                                                                                                                           |
| [`polars append`](/commands/docs/polars_append.md)                   | plugin | Appends a new dataframe.                                                                                                                                                                       |
| [`polars arg-max`](/commands/docs/polars_arg-max.md)                 | plugin | Return index for max value in series.                                                                                                                                                          |
| [`polars arg-min`](/commands/docs/polars_arg-min.md)                 | plugin | Return index for min value in series.                                                                                                                                                          |
| [`polars arg-sort`](/commands/docs/polars_arg-sort.md)               | plugin | Returns indexes for a sorted series.                                                                                                                                                           |
| [`polars arg-true`](/commands/docs/polars_arg-true.md)               | plugin | Returns indexes where values are true.                                                                                                                                                         |
| [`polars arg-unique`](/commands/docs/polars_arg-unique.md)           | plugin | Returns indexes for unique values.                                                                                                                                                             |
| [`polars arg-where`](/commands/docs/polars_arg-where.md)             | plugin | Creates an expression that returns the arguments where expression is true.                                                                                                                     |
| [`polars as`](/commands/docs/polars_as.md)                           | plugin | Creates an alias expression.                                                                                                                                                                   |
| [`polars as-date`](/commands/docs/polars_as-date.md)                 | plugin | Converts string to date.                                                                                                                                                                       |
| [`polars as-datetime`](/commands/docs/polars_as-datetime.md)         | plugin | Converts string to datetime.                                                                                                                                                                   |
| [`polars cache`](/commands/docs/polars_cache.md)                     | plugin | Caches operations in a new LazyFrame.                                                                                                                                                          |
| [`polars cast`](/commands/docs/polars_cast.md)                       | plugin | Cast a column to a different dtype.                                                                                                                                                            |
| [`polars col`](/commands/docs/polars_col.md)                         | plugin | Creates a named column expression.                                                                                                                                                             |
| [`polars collect`](/commands/docs/polars_collect.md)                 | plugin | Collect lazy dataframe into eager dataframe.                                                                                                                                                   |
| [`polars columns`](/commands/docs/polars_columns.md)                 | plugin | Show dataframe columns.                                                                                                                                                                        |
| [`polars concat`](/commands/docs/polars_concat.md)                   | plugin | Concatenate two or more dataframes.                                                                                                                                                            |
| [`polars concat-str`](/commands/docs/polars_concat-str.md)           | plugin | Creates a concat string expression.                                                                                                                                                            |
| [`polars contains`](/commands/docs/polars_contains.md)               | plugin | Checks if a pattern is contained in a string.                                                                                                                                                  |
| [`polars count`](/commands/docs/polars_count.md)                     | plugin | Returns the number of non-null values in the column.                                                                                                                                           |
| [`polars count-null`](/commands/docs/polars_count-null.md)           | plugin | Counts null values.                                                                                                                                                                            |
| [`polars cumulative`](/commands/docs/polars_cumulative.md)           | plugin | Cumulative calculation for a column or series.                                                                                                                                                 |
| [`polars datepart`](/commands/docs/polars_datepart.md)               | plugin | Creates an expression for capturing the specified datepart in a column.                                                                                                                        |
| [`polars decimal`](/commands/docs/polars_decimal.md)                 | plugin | Converts a string column into a decimal column                                                                                                                                                 |
| [`polars drop`](/commands/docs/polars_drop.md)                       | plugin | Creates a new dataframe by dropping the selected columns.                                                                                                                                      |
| [`polars drop-duplicates`](/commands/docs/polars_drop-duplicates.md) | plugin | Drops duplicate values in dataframe.                                                                                                                                                           |
| [`polars drop-nulls`](/commands/docs/polars_drop-nulls.md)           | plugin | Drops null values in dataframe.                                                                                                                                                                |
| [`polars dummies`](/commands/docs/polars_dummies.md)                 | plugin | Creates a new dataframe with dummy variables.                                                                                                                                                  |
| [`polars explode`](/commands/docs/polars_explode.md)                 | plugin | Explodes a dataframe or creates a explode expression.                                                                                                                                          |
| [`polars expr-not`](/commands/docs/polars_expr-not.md)               | plugin | Creates a not expression.                                                                                                                                                                      |
| [`polars fetch`](/commands/docs/polars_fetch.md)                     | plugin | Collects the lazyframe to the selected rows.                                                                                                                                                   |
| [`polars fill-nan`](/commands/docs/polars_fill-nan.md)               | plugin | Replaces NaN values with the given expression.                                                                                                                                                 |
| [`polars fill-null`](/commands/docs/polars_fill-null.md)             | plugin | Replaces NULL values with the given expression.                                                                                                                                                |
| [`polars filter`](/commands/docs/polars_filter.md)                   | plugin | Filter dataframe based in expression.                                                                                                                                                          |
| [`polars filter-with`](/commands/docs/polars_filter-with.md)         | plugin | Filters dataframe using a mask or expression as reference.                                                                                                                                     |
| [`polars first`](/commands/docs/polars_first.md)                     | plugin | Show only the first number of rows or create a first expression                                                                                                                                |
| [`polars flatten`](/commands/docs/polars_flatten.md)                 | plugin | An alias for polars explode.                                                                                                                                                                   |
| [`polars get`](/commands/docs/polars_get.md)                         | plugin | Creates dataframe with the selected columns.                                                                                                                                                   |
| [`polars get-day`](/commands/docs/polars_get-day.md)                 | plugin | Gets day from date.                                                                                                                                                                            |
| [`polars get-hour`](/commands/docs/polars_get-hour.md)               | plugin | Gets hour from date.                                                                                                                                                                           |
| [`polars get-minute`](/commands/docs/polars_get-minute.md)           | plugin | Gets minute from date.                                                                                                                                                                         |
| [`polars get-month`](/commands/docs/polars_get-month.md)             | plugin | Gets month from date.                                                                                                                                                                          |
| [`polars get-nanosecond`](/commands/docs/polars_get-nanosecond.md)   | plugin | Gets nanosecond from date.                                                                                                                                                                     |
| [`polars get-ordinal`](/commands/docs/polars_get-ordinal.md)         | plugin | Gets ordinal from date.                                                                                                                                                                        |
| [`polars get-second`](/commands/docs/polars_get-second.md)           | plugin | Gets second from date.                                                                                                                                                                         |
| [`polars get-week`](/commands/docs/polars_get-week.md)               | plugin | Gets week from date.                                                                                                                                                                           |
| [`polars get-weekday`](/commands/docs/polars_get-weekday.md)         | plugin | Gets weekday from date.                                                                                                                                                                        |
| [`polars get-year`](/commands/docs/polars_get-year.md)               | plugin | Gets year from date.                                                                                                                                                                           |
| [`polars group-by`](/commands/docs/polars_group-by.md)               | plugin | Creates a group-by object that can be used for other aggregations.                                                                                                                             |
| [`polars implode`](/commands/docs/polars_implode.md)                 | plugin | Aggregates values into a list.                                                                                                                                                                 |
| [`polars integer`](/commands/docs/polars_integer.md)                 | plugin | Converts a string column into a integer column                                                                                                                                                 |
| [`polars into-df`](/commands/docs/polars_into-df.md)                 | plugin | Converts a list, table or record into a dataframe.                                                                                                                                             |
| [`polars into-lazy`](/commands/docs/polars_into-lazy.md)             | plugin | Converts a dataframe into a lazy dataframe.                                                                                                                                                    |
| [`polars into-nu`](/commands/docs/polars_into-nu.md)                 | plugin | Converts a dataframe or an expression into nushell value for access and exploration.                                                                                                           |
| [`polars is-duplicated`](/commands/docs/polars_is-duplicated.md)     | plugin | Creates mask indicating duplicated values.                                                                                                                                                     |
| [`polars is-in`](/commands/docs/polars_is-in.md)                     | plugin | Creates an is-in expression or checks to see if the elements are contained in the right series                                                                                                 |
| [`polars is-not-null`](/commands/docs/polars_is-not-null.md)         | plugin | Creates mask where value is not null.                                                                                                                                                          |
| [`polars is-null`](/commands/docs/polars_is-null.md)                 | plugin | Creates mask where value is null.                                                                                                                                                              |
| [`polars is-unique`](/commands/docs/polars_is-unique.md)             | plugin | Creates mask indicating unique values.                                                                                                                                                         |
| [`polars join`](/commands/docs/polars_join.md)                       | plugin | Joins a lazy frame with other lazy frame.                                                                                                                                                      |
| [`polars last`](/commands/docs/polars_last.md)                       | plugin | Creates new dataframe with tail rows or creates a last expression.                                                                                                                             |
| [`polars len`](/commands/docs/polars_len.md)                         | plugin | Return the number of rows in the context. This is similar to COUNT(\*) in SQL.                                                                                                                 |
| [`polars lit`](/commands/docs/polars_lit.md)                         | plugin | Creates a literal expression.                                                                                                                                                                  |
| [`polars lowercase`](/commands/docs/polars_lowercase.md)             | plugin | Lowercase the strings in the column.                                                                                                                                                           |
| [`polars max`](/commands/docs/polars_max.md)                         | plugin | Creates a max expression or aggregates columns to their max value.                                                                                                                             |
| [`polars mean`](/commands/docs/polars_mean.md)                       | plugin | Creates a mean expression for an aggregation or aggregates columns to their mean value.                                                                                                        |
| [`polars median`](/commands/docs/polars_median.md)                   | plugin | Median value from columns in a dataframe or creates expression for an aggregation                                                                                                              |
| [`polars min`](/commands/docs/polars_min.md)                         | plugin | Creates a min expression or aggregates columns to their min value.                                                                                                                             |
| [`polars n-unique`](/commands/docs/polars_n-unique.md)               | plugin | Counts unique values.                                                                                                                                                                          |
| [`polars not`](/commands/docs/polars_not.md)                         | plugin | Inverts boolean mask.                                                                                                                                                                          |
| [`polars open`](/commands/docs/polars_open.md)                       | plugin | Opens CSV, JSON, NDJSON/JSON lines, arrow, avro, or parquet file to create dataframe. A lazy dataframe will be created by default, if supported.                                               |
| [`polars otherwise`](/commands/docs/polars_otherwise.md)             | plugin | Completes a when expression.                                                                                                                                                                   |
| [`polars pivot`](/commands/docs/polars_pivot.md)                     | plugin | Pivot a DataFrame from wide to long format.                                                                                                                                                    |
| [`polars profile`](/commands/docs/polars_profile.md)                 | plugin | Profile a lazy dataframe. This will run the query and return a record containing the materialized DataFrame and a DataFrame that contains profiling information of each node that is executed. |

The units of the timings are microseconds. |
| [`polars quantile`](/commands/docs/polars_quantile.md) | plugin | Aggregates the columns to the selected quantile. |
| [`polars query`](/commands/docs/polars_query.md) | plugin | Query dataframe using SQL. Note: The dataframe is always named 'df' in your query's from clause. |
| [`polars rename`](/commands/docs/polars_rename.md) | plugin | Rename a dataframe column. |
| [`polars replace`](/commands/docs/polars_replace.md) | plugin | Replace the leftmost (sub)string by a regex pattern. |
| [`polars replace-all`](/commands/docs/polars_replace-all.md) | plugin | Replace all (sub)strings by a regex pattern. |
| [`polars reverse`](/commands/docs/polars_reverse.md) | plugin | Reverses the LazyFrame |
| [`polars rolling`](/commands/docs/polars_rolling.md) | plugin | Rolling calculation for a series. |
| [`polars sample`](/commands/docs/polars_sample.md) | plugin | Create sample dataframe. |
| [`polars save`](/commands/docs/polars_save.md) | plugin | Saves a dataframe to disk. For lazy dataframes a sink operation will be used if the file type supports it (parquet, ipc/arrow, csv, and ndjson). |
| [`polars schema`](/commands/docs/polars_schema.md) | plugin | Show schema for a dataframe. |
| [`polars select`](/commands/docs/polars_select.md) | plugin | Selects columns from lazyframe. |
| [`polars set`](/commands/docs/polars_set.md) | plugin | Sets value where given mask is true. |
| [`polars set-with-idx`](/commands/docs/polars_set-with-idx.md) | plugin | Sets value in the given index. |
| [`polars shape`](/commands/docs/polars_shape.md) | plugin | Shows column and row size for a dataframe. |
| [`polars shift`](/commands/docs/polars_shift.md) | plugin | Shifts the values by a given period. |
| [`polars slice`](/commands/docs/polars_slice.md) | plugin | Creates new dataframe from a slice of rows. |
| [`polars sort-by`](/commands/docs/polars_sort-by.md) | plugin | Sorts a lazy dataframe based on expression(s). |
| [`polars std`](/commands/docs/polars_std.md) | plugin | Creates a std expression for an aggregation of std value from columns in a dataframe. |
| [`polars store-get`](/commands/docs/polars_store-get.md) | plugin | Gets a Dataframe or other object from the plugin cache. |
| [`polars store-ls`](/commands/docs/polars_store-ls.md) | plugin | Lists stored polars objects. |
| [`polars store-rm`](/commands/docs/polars_store-rm.md) | plugin | Removes a stored Dataframe or other object from the plugin cache. |
| [`polars str-join`](/commands/docs/polars_str-join.md) | plugin | Concatenates strings within a column or dataframes |
| [`polars str-lengths`](/commands/docs/polars_str-lengths.md) | plugin | Get lengths of all strings. |
| [`polars str-slice`](/commands/docs/polars_str-slice.md) | plugin | Slices the string from the start position until the selected length. |
| [`polars strftime`](/commands/docs/polars_strftime.md) | plugin | Formats date based on string rule. |
| [`polars sum`](/commands/docs/polars_sum.md) | plugin | Creates a sum expression for an aggregation or aggregates columns to their sum value. |
| [`polars summary`](/commands/docs/polars_summary.md) | plugin | For a dataframe, produces descriptive statistics (summary statistics) for its numeric columns. |
| [`polars take`](/commands/docs/polars_take.md) | plugin | Creates new dataframe using the given indices. |
| [`polars unique`](/commands/docs/polars_unique.md) | plugin | Returns unique values from a dataframe. |
| [`polars unnest`](/commands/docs/polars_unnest.md) | plugin | Decompose struct columns into separate columns for each of their fields. The new columns will be inserted into the dataframe at the location of the struct column. |
| [`polars unpivot`](/commands/docs/polars_unpivot.md) | plugin | Unpivot a DataFrame from wide to long format. |
| [`polars uppercase`](/commands/docs/polars_uppercase.md) | plugin | Uppercase the strings in the column. |
| [`polars value-counts`](/commands/docs/polars_value-counts.md) | plugin | Returns a dataframe with the counts for unique values in series. |
| [`polars var`](/commands/docs/polars_var.md) | plugin | Create a var expression for an aggregation. |
| [`polars when`](/commands/docs/polars_when.md) | plugin | Creates and modifies a when expression. |
| [`polars with-column`](/commands/docs/polars_with-column.md) | plugin | Adds a series to the dataframe. |
