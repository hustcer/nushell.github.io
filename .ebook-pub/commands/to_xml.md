# to xml

**version**: 0.80.0

## **usage**:

Convert special record structure into .xml text.

## Signature

`> to xml --pretty`

## Parameters

- `--pretty {int}`: Formats the XML text with the provided indentation setting

## Notes

```text
Every XML entry is represented via a record with tag, attribute and content fields.
To represent different types of entries different values must be written to this fields:
1. Tag entry: `{tag: <tag name> attrs: {<attr name>: "<string value>" ...} content: [<entries>]}`
2. Comment entry: `{tag: '!' attrs: null content: "<comment string>"}`
3. Processing instruction (PI): `{tag: '?<pi name>' attrs: null content: "<pi content string>"}`
4. Text: `{tag: null attrs: null content: "<text>"}`. Or as plain `<text>` instead of record.

Additionally any field which is: empty record, empty list or null, can be omitted.
```

## Examples

Outputs an XML string representing the contents of this table

```bash
> {tag: note attributes: {} content : [{tag: remember attributes: {} content : [{tag: null attrs: null content : Event}]}]} | to xml
```

When formatting xml null and empty record fields can be omitted and strings can be written without a wrapping record

```bash
> {tag: note content : [{tag: remember content : [Event]}]} | to xml
```

Optionally, formats the text with a custom indentation setting

```bash
> {tag: note content : [{tag: remember content : [Event]}]} | to xml -p 3
```
