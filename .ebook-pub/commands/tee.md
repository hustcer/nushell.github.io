# tee

**version**: 0.100.1

## **usage**:

Copy a stream to another command in parallel.

## Signature

`> tee (closure) --stderr`

## Parameters

- `closure`: The other command to send the stream to.
- `--stderr`: For external commands: copy the standard error stream instead.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Save a webpage to a file while also printing it

```bash
> http get http://example.org/ | tee { save example.html }
```

Save error messages from an external command to a file without redirecting them

```bash
> nu -c 'print -e error; print ok' | tee --stderr { save error.log } | complete
```

Print numbers and their sum

```bash
> 1..100 | tee { each { print } } | math sum | wrap sum
```

Do something with a value on another thread, while also passing through the value

```bash
> 10000 | tee { 1..$in | print } | $in * 5
```

## Notes

```text
This is useful for doing something else with a stream while still continuing to
use it in your pipeline.
```
