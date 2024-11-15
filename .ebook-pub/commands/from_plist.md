# from plist

**version**: 0.100.1

## **usage**:

Convert plist to Nushell values

## Signature

`> from plist `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Convert a table into a plist file

```bash
> '<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
        <key>a</key>
        <integer>3</integer>
</dict>
</plist>' | from plist
```
