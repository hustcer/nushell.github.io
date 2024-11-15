# http delete

**version**: 0.100.1

## **usage**:

Delete the specified resource.

## Signature

`> http delete (URL) --user --password --data --content-type --max-time --headers --raw --insecure --full --allow-errors --redirect-mode`

## Parameters

- `URL`: The URL to fetch the contents from.
- `--user {any}`: the username when authenticating
- `--password {any}`: the password when authenticating
- `--data {any}`: the content to post
- `--content-type {any}`: the MIME type of content to post
- `--max-time {duration}`: max duration before timeout occurs
- `--headers {any}`: custom headers you want to add
- `--raw`: fetch contents as text rather than a table
- `--insecure`: allow insecure server connections when using SSL
- `--full`: returns the full response instead of only the body
- `--allow-errors`: do not fail if the server returns an error code
- `--redirect-mode {string}`: What to do when encountering redirects. Default: 'follow'. Valid options: 'follow' ('f'), 'manual' ('m'), 'error' ('e').

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

http delete from example.com

```bash
> http delete https://www.example.com
```

http delete from example.com, with username and password

```bash
> http delete --user myuser --password mypass https://www.example.com
```

http delete from example.com, with custom header

```bash
> http delete --headers [my-header-key my-header-value] https://www.example.com
```

http delete from example.com, with body

```bash
> http delete --data 'body' https://www.example.com
```

http delete from example.com, with JSON body

```bash
> http delete --content-type application/json --data { field: value } https://www.example.com
```

Perform an HTTP delete with JSON content from a pipeline to example.com

```bash
> open foo.json | http delete https://www.example.com
```

## Notes

```text
Performs HTTP DELETE operation.
```
