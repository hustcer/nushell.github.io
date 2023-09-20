# describe

**version**: 0.85.0

## **usage**:

Describe the type and structure of the value(s) piped in.

## Signature

`> describe --no-collect`

## Parameters

- `--no-collect`: do not collect streams of structured data

## Input/output types:

| input | output |
| ----- | ------ |
| any   | string |

## Examples

Describe the type of a string

```bash
> 'hello' | describe
```
