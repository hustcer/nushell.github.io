# touch

**version**: 0.85.0

## **usage**:

Creates one or more files.

## Signature

`> touch (filename) ...rest --reference --modified --access --no-create`

## Parameters

- `filename`: the path of the file you want to create
- `...rest`: additional files to create
- `--reference {string}`: change the file or directory time to the time of the reference file/directory
- `--modified`: change the modification time of the file or directory. If no timestamp, date or reference file/directory is given, the current time is used
- `--access`: change the access time of the file or directory. If no timestamp, date or reference file/directory is given, the current time is used
- `--no-create`: do not create the file if it does not exist

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Creates "fixture.json"

```bash
> touch fixture.json
```

Creates files a, b and c

```bash
> touch a b c
```

Changes the last modified time of "fixture.json" to today's date

```bash
> touch -m fixture.json
```

Changes the last modified time of files a, b and c to a date

```bash
> touch -m -d "yesterday" a b c
```

Changes the last modified time of file d and e to "fixture.json"'s last modified time

```bash
> touch -m -r fixture.json d e
```

Changes the last accessed time of "fixture.json" to a date

```bash
> touch -a -d "August 24, 2019; 12:30:30" fixture.json
```
