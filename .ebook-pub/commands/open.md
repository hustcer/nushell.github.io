# open

**version**: 0.85.0

## **usage**:

Load a file into a cell, converting to table if possible (avoid by appending '--raw').

## Signature

`> open (filename) ...rest --raw`

## Parameters

- `filename`: the filename to use
- `...rest`: optional additional files to open
- `--raw`: open file as raw binary

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |
| string  | any    |

## Examples

Open a file, with structure (based on file extension or SQLite database header)

```bash
> open myfile.json
```

Open a file, as raw bytes

```bash
> open myfile.json --raw
```

Open a file, using the input to get filename

```bash
> 'myfile.txt' | open
```

Open a file, and decode it by the specified encoding

```bash
> open myfile.txt --raw | decode utf-8
```

Create a custom `from` parser to open newline-delimited JSON files with `open`

```bash
> def "from ndjson" [] { from json -o }; open myfile.ndjson
```

## Notes

```text
Support to automatically parse files with an extension `.xyz` can be provided by a `from xyz` command in scope.
```
