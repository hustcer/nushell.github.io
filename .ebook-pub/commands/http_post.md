# http post

**version**: 0.93.0

## **usage**:

Post a body to a URL.

## Signature

`> http post (URL) (data) --user --password --content-type --max-time --headers --raw --insecure --full --allow-errors --redirect-mode`

## Parameters

- `URL`: The URL to post to.
- `data`: The contents of the post body.
- `--user {any}`: the username when authenticating
- `--password {any}`: the password when authenticating
- `--content-type {any}`: the MIME type of content to post
- `--max-time {int}`: timeout period in seconds
- `--headers {any}`: custom headers you want to add
- `--raw`: return values as a string instead of a table
- `--insecure`: allow insecure server connections when using SSL
- `--full`: returns the full response instead of only the body
- `--allow-errors`: do not fail if the server returns an error code
- `--redirect-mode {string}`: What to do when encountering redirects. Default: 'follow'. Valid options: 'follow' ('f'), 'manual' ('m'), 'error' ('e').

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |

## Examples

Post content to example.com

```bash
> http post https://www.example.com 'body'
```

Post content to example.com, with username and password

```bash
> http post --user myuser --password mypass https://www.example.com 'body'
```

Post content to example.com, with custom header

```bash
> http post --headers [my-header-key my-header-value] https://www.example.com
```

Post content to example.com, with JSON body

```bash
> http post --content-type application/json https://www.example.com { field: value }
```

## Notes

```text
Performs HTTP POST operation.
```
