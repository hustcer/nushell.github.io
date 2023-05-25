# from eml

**version**: 0.80.0

## **usage**:

Parse text as .eml and create record.

## Signature

`> from eml --preview-body`

## Parameters

- `--preview-body {int}`: How many bytes of the body to preview

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
