# overlay hide

**version**: 0.80.0

## **usage**:

Hide an active overlay.

## Signature

`> overlay hide (name) --keep-custom --keep-env`

## Parameters

- `name`: Overlay to hide
- `--keep-custom`: Keep all newly added commands and aliases in the next activated overlay
- `--keep-env {list<string>}`: List of environment variables to keep in the next activated overlay

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```

## Examples

Keep a custom command after hiding the overlay

```bash
> module spam { export def foo [] { "foo" } }
    overlay use spam
    def bar [] { "bar" }
    overlay hide spam --keep-custom
    bar

```

Hide an overlay created from a file

```bash
> 'export alias f = "foo"' | save spam.nu
    overlay use spam.nu
    overlay hide spam
```

Hide the last activated overlay

```bash
> module spam { export-env { let-env FOO = "foo" } }
    overlay use spam
    overlay hide
```

Keep the current working directory when removing an overlay

```bash
> overlay new spam
    cd some-dir
    overlay hide --keep-env [ PWD ] spam
```
