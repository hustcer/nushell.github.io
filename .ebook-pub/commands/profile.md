# profile

**version**: 0.80.0

## **usage**:

Profile each pipeline element in a closure.

## Signature

`> profile (closure) --source --values --max-depth`

## Parameters

- `closure`: the closure to run
- `--source`: Collect source code in the report
- `--values`: Collect values in the report
- `--max-depth {int}`: How many levels of blocks to step into (default: 1)

## Notes

```text
The command collects run time of every pipeline element, recursively stepping into child closures
until a maximum depth. Optionally, it also collects the source code and intermediate values.

Current known limitations are:
* profiling data from subexpressions is not tracked
* it does not step into loop iterations
```

## Examples

Profile some code, stepping into the `spam` command and collecting source.

```bash
> def spam [] { "spam" }; profile {|| spam | str length } -d 2 --source
```
