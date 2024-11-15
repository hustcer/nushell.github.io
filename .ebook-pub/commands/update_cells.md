# update cells

**version**: 0.100.1

## **usage**:

Update the table cells.

## Signature

`> update cells (closure) --columns`

## Parameters

- `closure`: the closure to run an update for each cell
- `--columns {list<any>}`: list of columns to update

## Input/output types:

| input | output |
| ----- | ------ |
| table | table  |

## Examples

Update the zero value cells to empty strings.

```bash
> [
        ["2021-04-16", "2021-06-10", "2021-09-18", "2021-10-15", "2021-11-16", "2021-11-17", "2021-11-18"];
        [          37,            0,            0,            0,           37,            0,            0]
    ] | update cells { |value|
          if $value == 0 {
            ""
          } else {
            $value
          }
    }
```

Update the zero value cells to empty strings in 2 last columns.

```bash
> [
        ["2021-04-16", "2021-06-10", "2021-09-18", "2021-10-15", "2021-11-16", "2021-11-17", "2021-11-18"];
        [          37,            0,            0,            0,           37,            0,            0]
    ] | update cells -c ["2021-11-18", "2021-11-17"] { |value|
            if $value == 0 {
              ""
            } else {
              $value
            }
    }
```
