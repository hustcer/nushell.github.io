# stor export

**version**: 0.90.2

## **usage**:

Export the in-memory sqlite database to a sqlite database file.

## Signature

`> stor export --file-name`

## Parameters

- `--file-name {string}`: file name to export the sqlite in-memory database to

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

Export the in-memory sqlite database

```bash
> stor export --file-name nudb.sqlite
```
