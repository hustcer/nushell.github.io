# zip

**version**: 0.90.2

## **usage**:

Combine a stream with the input.

## Signature

`> zip (other)`

## Parameters

- `other`: The other input.

## Input/output types:

| input       | output              |
| ----------- | ------------------- |
| list\<any\> | list\<list\<any\>\> |
| range       | list\<list\<any\>\> |

## Examples

Zip two lists

```bash
> [1 2] | zip [3 4]
```

Zip two ranges

```bash
> 1..3 | zip 4..6
```

Rename .ogg files to match an existing list of filenames

```bash
> glob *.ogg | zip ['bang.ogg', 'fanfare.ogg', 'laser.ogg'] | each {|| mv $in.0 $in.1 }
```
