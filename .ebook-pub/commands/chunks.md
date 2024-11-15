# chunks

**version**: 0.100.1

## **usage**:

Divide a list or table into chunks of `chunk_size`.

## Signature

`> chunks (chunk_size)`

## Parameters

- `chunk_size`: The size of each chunk.

## Input/output types:

| input       | output              |
| ----------- | ------------------- |
| list\<any\> | list\<list\<any\>\> |
| table       | list\<table\>       |

## Examples

Chunk a list into pairs

```bash
> [1 2 3 4] | chunks 2
```

Chunk the rows of a table into triplets

```bash
> [[foo bar]; [0 1] [2 3] [4 5] [6 7] [8 9]] | chunks 3
```

## Notes

```text
This command will error if `chunk_size` is negative or zero.
```
