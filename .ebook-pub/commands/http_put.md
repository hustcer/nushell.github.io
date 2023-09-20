# http put

**version**: 0.85.0

## **usage**:

Put a body to a URL.

## Signature

`> http put (URL) (data) --user --password --content-type --max-time --headers --raw --insecure --full --allow-errors`

## Parameters

- `URL`: the URL to post to
- `data`: the contents of the post body
- `--user {any}`: the username when authenticating
- `--password {any}`: the password when authenticating
- `--content-type {any}`: the MIME type of content to post
- `--max-time {int}`: timeout period in seconds
- `--headers {any}`: custom headers you want to add
- `--raw`: return values as a string instead of a table
- `--insecure`: allow insecure server connections when using SSL
- `--full`: returns the full response instead of only the body
- `--allow-errors`: do not fail if the server returns an error code

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |

## Examples

Put content to example.com

```bash
> http put https://www.example.com 'body'
```

Put content to example.com, with username and password

```bash
> http put -u myuser -p mypass https://www.example.com 'body'
```

Put content to example.com, with custom header

```bash
> http put -H [my-header-key my-header-value] https://www.example.com
```

Put content to example.com, with JSON body

```bash
> http put -t application/json https://www.example.com { field: value }
```

## Notes

```text
Performs HTTP PUT operation.
```
