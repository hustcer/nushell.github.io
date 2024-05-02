# view span

**version**: 0.93.0

## **usage**:

View the contents of a span.

## Signature

`> view span (start) (end)`

## Parameters

- `start`: Start of the span.
- `end`: End of the span.

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Examples

View the source of a span. 1 and 2 are just example values. Use the return of debug --raw to get the actual values

```bash
> some | pipeline | or | variable | debug --raw; view span 1 2
```

## Notes

```text
This command is meant for debugging purposes.
It allows you to view the contents of nushell spans.
One way to get spans is to pipe something into 'debug --raw'.
Then you can use the Span { start, end } values as the start and end values for this command.
```
