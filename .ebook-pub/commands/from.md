# from

**version**: 0.93.0

## **usage**:

Parse a string or binary data into structured data.

## Signature

`> from `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Notes

```text
You must use one of the following subcommands. Using this command as-is will only produce this help message.
```

## Subcommands:

| name                                               | type           | usage                                                                                                                      |
| -------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [`from csv`](/commands/docs/from_csv.md)           | Builtin        | Parse text as .csv and create table.                                                                                       |
| [`from eml`](/commands/docs/from_eml.md)           | Builtin,Plugin | Parse text as .eml and create record.                                                                                      |
| [`from ics`](/commands/docs/from_ics.md)           | Builtin,Plugin | Parse text as .ics and create table.                                                                                       |
| [`from ini`](/commands/docs/from_ini.md)           | Builtin,Plugin | Parse text as .ini and create table.                                                                                       |
| [`from json`](/commands/docs/from_json.md)         | Builtin        | Convert from json to structured data.                                                                                      |
| [`from msgpack`](/commands/docs/from_msgpack.md)   | Builtin        | Convert MessagePack data into Nu values.                                                                                   |
| [`from msgpackz`](/commands/docs/from_msgpackz.md) | Builtin        | Convert brotli-compressed MessagePack data into Nu values.                                                                 |
| [`from nuon`](/commands/docs/from_nuon.md)         | Builtin        | Convert from nuon to structured data.                                                                                      |
| [`from ods`](/commands/docs/from_ods.md)           | Builtin        | Parse OpenDocument Spreadsheet(.ods) data and create table.                                                                |
| [`from ssv`](/commands/docs/from_ssv.md)           | Builtin        | Parse text as space-separated values and create a table. The default minimum number of spaces counted as a separator is 2. |
| [`from toml`](/commands/docs/from_toml.md)         | Builtin        | Parse text as .toml and create record.                                                                                     |
| [`from tsv`](/commands/docs/from_tsv.md)           | Builtin        | Parse text as .tsv and create table.                                                                                       |
| [`from url`](/commands/docs/from_url.md)           | Builtin        | Parse url-encoded string as a record.                                                                                      |
| [`from vcf`](/commands/docs/from_vcf.md)           | Builtin,Plugin | Parse text as .vcf and create table.                                                                                       |
| [`from xlsx`](/commands/docs/from_xlsx.md)         | Builtin        | Parse binary Excel(.xlsx) data and create table.                                                                           |
| [`from xml`](/commands/docs/from_xml.md)           | Builtin        | Parse text as .xml and create record.                                                                                      |
| [`from yaml`](/commands/docs/from_yaml.md)         | Builtin        | Parse text as .yaml/.yml and create table.                                                                                 |
| [`from yml`](/commands/docs/from_yml.md)           | Builtin        | Parse text as .yaml/.yml and create table.                                                                                 |
