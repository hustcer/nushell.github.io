# rm

**version**: 0.93.0

## **usage**:

Remove files and directories.

## Signature

`> rm ...rest --trash --permanent --recursive --force --verbose --interactive --interactive-once`

## Parameters

- `...rest`: The file paths(s) to remove.
- `--trash`: move to the platform's trash instead of permanently deleting. not used on android and ios
- `--permanent`: delete permanently, ignoring the 'always_trash' config option. always enabled on android and ios
- `--recursive`: delete subdirectories recursively
- `--force`: suppress error when no file
- `--verbose`: print names of deleted files
- `--interactive`: ask user to confirm action
- `--interactive-once`: ask user to confirm action only once

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Delete, or move a file to the trash (based on the 'always_trash' config option)

```bash
> rm file.txt
```

Move a file to the trash

```bash
> rm --trash file.txt
```

Delete a file permanently, even if the 'always_trash' config option is true

```bash
> rm --permanent file.txt
```

Delete a file, ignoring 'file not found' errors

```bash
> rm --force file.txt
```

Delete all 0KB files in the current directory

```bash
> ls | where size == 0KB and type == file | each { rm $in.name } | null
```
