# shells

**version**: 0.78.0

## **usage**:

Lists all open shells.

## Signature

`> shells `

## Examples

Enter a new shell at parent path '..' and show all opened shells

```bash
> enter ..; shells
```

Show currently active shell

```bash
> shells | where active == true
```
