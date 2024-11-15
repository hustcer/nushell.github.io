# try

**version**: 0.100.1

## **usage**:

Try to run a block, if it fails optionally run a catch closure.

## Signature

`> try (try_block) (catch_closure)`

## Parameters

- `try_block`: Block to run.
- `catch_closure`: Closure to run if try block fails.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Try to run a division by zero

```bash
> try { 1 / 0 }
```

Try to run a division by zero and return a string instead

```bash
> try { 1 / 0 } catch { 'divided by zero' }
```

Try to run a division by zero and report the message

```bash
> try { 1 / 0 } catch { |err| $err.msg }
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
