# commandline

**version**: 0.85.0

## **usage**:

View or modify the current command line input buffer.

## Signature

`> commandline (cmd) --cursor --cursor-end --append --insert --replace`

## Parameters

- `cmd`: the string to perform the operation with
- `--cursor`: Set or get the current cursor position
- `--cursor-end`: Set the current cursor position to the end of the buffer
- `--append`: appends the string to the end of the buffer
- `--insert`: inserts the string into the buffer at the cursor position
- `--replace`: replaces the current contents of the buffer (default)

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |
| string  | string  |
