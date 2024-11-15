# http head

**version**: 0.100.1

## **usage**:

Get the headers from a URL.

## Signature

`> http head (URL) --user --password --max-time --headers --insecure --redirect-mode`

## Parameters

- `URL`: The URL to fetch the contents from.
- `--user {any}`: the username when authenticating
- `--password {any}`: the password when authenticating
- `--max-time {duration}`: max duration before timeout occurs
- `--headers {any}`: custom headers you want to add
- `--insecure`: allow insecure server connections when using SSL
- `--redirect-mode {string}`: What to do when encountering redirects. Default: 'follow'. Valid options: 'follow' ('f'), 'manual' ('m'), 'error' ('e').

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
> http head --user myuser --password mypass https://www.example.com
```

Get headers from example.com, with custom header

```bash
> http head --headers [my-header-key my-header-value] https://www.example.com
```

## Notes

```text
Performs HTTP HEAD operation.
```
