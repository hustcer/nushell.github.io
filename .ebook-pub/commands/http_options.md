# http options

**version**: 0.85.0

## **usage**:

Requests permitted communication options for a given URL.

## Signature

`> http options (URL) --user --password --max-time --headers --insecure --allow-errors`

## Parameters

- `URL`: the URL to fetch the options from
- `--user {any}`: the username when authenticating
- `--password {any}`: the password when authenticating
- `--max-time {int}`: timeout period in seconds
- `--headers {any}`: custom headers you want to add
- `--insecure`: allow insecure server connections when using SSL
- `--allow-errors`: do not fail if the server returns an error code

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |

## Examples

Get options from example.com

```bash
> http options https://www.example.com
```

Get options from example.com, with username and password

```bash
> http options -u myuser -p mypass https://www.example.com
```

Get options from example.com, with custom header

```bash
> http options -H [my-header-key my-header-value] https://www.example.com
```

Get options from example.com, with custom headers

```bash
> http options -H [my-header-key-A my-header-value-A my-header-key-B my-header-value-B] https://www.example.com
```

Simulate a browser cross-origin preflight request from www.example.com to media.example.com

```bash
> http options https://media.example.com/api/ -H [Origin https://www.example.com Access-Control-Request-Headers "Content-Type, X-Custom-Header" Access-Control-Request-Method GET]
```

## Notes

```text
Performs an HTTP OPTIONS request. Most commonly used for making CORS preflight requests.
```
