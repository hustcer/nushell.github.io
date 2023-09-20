# try

**version**: 0.85.0

## **usage**:

Try to run a block, if it fails optionally run a catch block.

## Signature

`> try (try_block) (catch_block)`

## Parameters

- `try_block`: block to run
- `catch_block`: block to run if try block fails

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Try to run a missing command

```bash
> try { asdfasdf }
```

Try to run a missing command

```bash
> try { asdfasdf } catch { 'missing' }
```
