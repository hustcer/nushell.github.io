# print

**version**: 0.80.0

## **usage**:

Print the given values to stdout.

## Signature

`> print ...rest --no-newline --stderr`

## Parameters

- `...rest`: the values to print
- `--no-newline`: print without inserting a newline for the line ending
- `--stderr`: print to stderr instead of stdout

## Notes

```text
Unlike `echo`, this command does not return any value (`print | describe` will return "nothing").
Since this command has no output, there is no point in piping it with other commands.

`print` may be used inside blocks of code (e.g.: hooks) to display text during execution without interfering with the pipeline.
```

## Examples

Print 'hello world'

```bash
> print "hello world"
```

Print the sum of 2 and 3

```bash
> print (2 + 3)
```
