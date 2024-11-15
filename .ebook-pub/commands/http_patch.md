# http patch

**version**: 0.100.1

## **usage**:

Patch a body to a URL.

## Signature

`> http patch (URL) (data) --user --password --content-type --max-time --headers --raw --insecure --full --allow-errors --redirect-mode`

## Parameters

- `URL`: The URL to post to.
- `data`: The contents of the post body.
- `--user {any}`: the username when authenticating
- `--password {any}`: the password when authenticating
- `--content-type {any}`: the MIME type of content to post
- `--max-time {duration}`: max duration before timeout occurs
- `--headers {any}`: custom headers you want to add
- `--raw`: return values as a string instead of a table
- `--insecure`: allow insecure server connections when using SSL
- `--full`: returns the full response instead of only the body
- `--allow-errors`: do not fail if the server returns an error code
- `--redirect-mode {string}`: What to do when encountering redirects. Default: 'follow'. Valid options: 'follow' ('f'), 'manual' ('m'), 'error' ('e').

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Patch content to example.com

```bash
> http patch https://www.example.com 'body'
```

Patch content to example.com, with username and password

```bash
> http patch --user myuser --password mypass https://www.example.com 'body'
```

Patch content to example.com, with custom header

```bash
> http patch --headers [my-header-key my-header-value] https://www.example.com
```

Patch content to example.com, with JSON body

```bash
> http patch --content-type application/json https://www.example.com { field: value }
```

Patch JSON content from a pipeline to example.com

```bash
> open --raw foo.json | http patch https://www.example.com
```

## Notes

```text
Performs HTTP PATCH operation.
```
