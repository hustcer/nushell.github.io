# from eml

**version**: 0.90.2

## **usage**:

Parse text as .eml and create record.

## Signature

`> from eml --preview-body`

## Parameters

- `--preview-body {int}`: How many bytes of the body to preview

## Input/output types:

| input  | output |
| ------ | ------ |
| string | record |

## Examples

Convert eml structured data into record

```bash
> 'From: test@email.com
Subject: Welcome
To: someone@somewhere.com
Test' | from eml
```

Convert eml structured data into record

```bash
> 'From: test@email.com
Subject: Welcome
To: someone@somewhere.com
Test' | from eml -b 1
```
