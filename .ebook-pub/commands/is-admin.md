# is-admin

**version**: 0.90.2

## **usage**:

Check if nushell is running with administrator or root privileges.

## Signature

`> is-admin `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | bool   |

## Examples

Return 'iamroot' if nushell is running with admin/root privileges, and 'iamnotroot' if not.

```bash
> if (is-admin) { "iamroot" } else { "iamnotroot" }
```
