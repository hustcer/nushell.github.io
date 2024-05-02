# from xml

**version**: 0.93.0

## **usage**:

Parse text as .xml and create record.

## Signature

`> from xml --keep-comments --keep-pi`

## Parameters

- `--keep-comments`: add comment nodes to result
- `--keep-pi`: add processing instruction nodes to result

## Input/output types:

| input  | output |
| ------ | ------ |
| string | record |

## Examples

Converts xml formatted string to record

```bash
> '<?xml version="1.0" encoding="UTF-8"?>
<note>
  <remember>Event</remember>
</note>' | from xml
```

## Notes

```text
Every XML entry is represented via a record with tag, attribute and content fields.
To represent different types of entries different values are written to this fields:
1. Tag entry: `{tag: <tag name> attrs: {<attr name>: "<string value>" ...} content: [<entries>]}`
2. Comment entry: `{tag: '!' attrs: null content: "<comment string>"}`
3. Processing instruction (PI): `{tag: '?<pi name>' attrs: null content: "<pi content string>"}`
4. Text: `{tag: null attrs: null content: "<text>"}`.

Unlike to xml command all null values are always present and text is never represented via plain
string. This way content of every tag is always a table and is easier to parse
```
