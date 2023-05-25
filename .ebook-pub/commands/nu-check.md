# nu-check

**version**: 0.80.0

## **usage**:

Validate and parse input content.

## Signature

`> nu-check (path) --as-module --debug --all`

## Parameters

- `path`: File path to parse
- `--as-module`: Parse content as module
- `--debug`: Show error messages
- `--all`: Parse content as script first, returns result if success, otherwise, try with module

## Examples

Parse a input file as script(Default)

```bash
> nu-check script.nu
```

Parse a input file as module

```bash
> nu-check --as-module module.nu
```

Parse a input file by showing error message

```bash
> nu-check -d script.nu
```

Parse an external stream as script by showing error message

```bash
> open foo.nu | nu-check -d script.nu
```

Parse an internal stream as module by showing error message

```bash
> open module.nu | lines | nu-check -d --as-module module.nu
```

Parse a string as script

```bash
> $'two(char nl)lines' | nu-check
```

Heuristically parse which begins with script first, if it sees a failure, try module afterwards

```bash
> nu-check -a script.nu
```

Heuristically parse by showing error message

```bash
> open foo.nu | lines | nu-check -ad
```
