# split-by

**version**: 0.100.1

## **usage**:

Split a record into groups.

## Signature

`> split-by (splitter)`

## Parameters

- `splitter`: The splitter value to use.

## Input/output types:

| input  | output |
| ------ | ------ |
| record | record |

## Examples

split items by column named "lang"

```bash
> {
    '2019': [
        { name: 'andres', lang: 'rb', year: '2019' },
        { name: 'jt', lang: 'rs', year: '2019' }
    ],
    '2021': [
        { name: 'storm', lang: 'rs', 'year': '2021' }
    ]
    } | split-by lang
```
