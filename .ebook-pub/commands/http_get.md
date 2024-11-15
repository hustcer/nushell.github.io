# http get

**version**: 0.100.1

## **usage**:

Fetch the contents from a URL.

## Signature

`> http get (URL) --user --password --max-time --headers --raw --insecure --full --allow-errors --redirect-mode`

## Parameters

- `URL`: The URL to fetch the contents from.
- `--user {any}`: the username when authenticating
- `--password {any}`: the password when authenticating
- `--max-time {duration}`: max duration before timeout occurs
- `--headers {any}`: custom headers you want to add
- `--raw`: fetch contents as text rather than a table
- `--insecure`: allow insecure server connections when using SSL
- `--full`: returns the full response instead of only the body
- `--allow-errors`: do not fail if the server returns an error code
- `--redirect-mode {string}`: What to do when encountering redirects. Default: 'follow'. Valid options: 'follow' ('f'), 'manual' ('m'), 'error' ('e').

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |

## Examples

Get content from example.com

```bash
> http get https://www.example.com
```

Get content from example.com, with username and password

```bash
> http get --user myuser --password mypass https://www.example.com
```

Get content from example.com, with custom header

```bash
> http get --headers [my-header-key my-header-value] https://www.example.com
```

Get content from example.com, with custom headers

```bash
> http get --headers [my-header-key-A my-header-value-A my-header-key-B my-header-value-B] https://www.example.com
```

## Notes

```text
Performs HTTP GET operation.
```
