# http head

**version**: 0.85.0

## **usage**:

Get the headers from a URL.

## Signature

`> http head (URL) --user --password --max-time --headers --insecure`

## Parameters

- `URL`: the URL to fetch the contents from
- `--user {any}`: the username when authenticating
- `--password {any}`: the password when authenticating
- `--max-time {int}`: timeout period in seconds
- `--headers {any}`: custom headers you want to add
- `--insecure`: allow insecure server connections when using SSL

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |

## Examples

Get headers from example.com

```bash
> http head https://www.example.com
```

Get headers from example.com, with username and password

```bash
> http head -u myuser -p mypass https://www.example.com
```

Get headers from example.com, with custom header

```bash
> http head -H [my-header-key my-header-value] https://www.example.com
```

## Notes

```text
Performs HTTP HEAD operation.
```
