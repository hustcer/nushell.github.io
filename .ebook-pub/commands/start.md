# start

**version**: 0.85.0

## **usage**:

Open a folder, file or website in the default application or viewer.

## Signature

`> start (path)`

## Parameters

- `path`: path to open

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |
| string  | any    |

## Examples

Open a text file with the default text editor

```bash
> start file.txt
```

Open an image with the default image viewer

```bash
> start file.jpg
```

Open the current directory with the default file manager

```bash
> start .
```

Open a pdf with the default pdf viewer

```bash
> start file.pdf
```

Open a website with default browser

```bash
> start https://www.nushell.sh
```
