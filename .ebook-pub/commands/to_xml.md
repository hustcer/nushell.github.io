# to xml

**version**: 0.93.0

## **usage**:

Convert special record structure into .xml text.

## Signature

`> to xml --indent --partial-escape --self-closed`

## Parameters

- `--indent {int}`: Formats the XML text with the provided indentation setting
- `--partial-escape`: Only escape mandatory characters in text and attributes
- `--self-closed`: Output empty tags as self closing

## Input/output types:

| input  | output |
| ------ | ------ |
| record | string |

## Examples

Outputs an XML string representing the contents of this table

```bash
> {tag: note attributes: {} content : [{tag: remember attributes: {} content : [{tag: null attributes: null content : Event}]}]} | to xml
```

When formatting xml null and empty record fields can be omitted and strings can be written without a wrapping record

```bash
> {tag: note content : [{tag: remember content : [Event]}]} | to xml
```

Optionally, formats the text with a custom indentation setting

```bash
> {tag: note content : [{tag: remember content : [Event]}]} | to xml --indent 3
```

Produce less escaping sequences in resulting xml

```bash
> {tag: note attributes: {a: "'qwe'\\"} content: ["\"'"]} | to xml --partial-escape
```

Save space using self-closed tags

```bash
> {tag: root content: [[tag]; [a] [b] [c]]} | to xml --self-closed
```

## Notes

```text
Every XML entry is represented via a record with tag, attribute and content fields.
To represent different types of entries different values must be written to this fields:
1. Tag entry: `{tag: <tag name> attributes: {<attr name>: "<string value>" ...} content: [<entries>]}`
2. Comment entry: `{tag: '!' attributes: null content: "<comment string>"}`
3. Processing instruction (PI): `{tag: '?<pi name>' attributes: null content: "<pi content string>"}`
4. Text: `{tag: null attributes: null content: "<text>"}`. Or as plain `<text>` instead of record.

Additionally any field which is: empty record, empty list or null, can be omitted.
```
