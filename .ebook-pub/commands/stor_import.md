# stor import

**version**: 0.93.0

## **usage**:

Import a sqlite database file into the in-memory sqlite database.

## Signature

`> stor import --file-name`

## Parameters

- `--file-name {string}`: file name to import the sqlite in-memory database from

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

Import a sqlite database file into the in-memory sqlite database

```bash
> stor import --file-name nudb.sqlite
```
