# http delete

**version**: 0.80.0

## **usage**:

Delete the specified resource.

## Signature

`> http delete (URL) --user --password --data --content-type --max-time --headers --raw --insecure --full --allow-errors`

## Parameters

- `URL`: the URL to fetch the contents from
- `--user {any}`: the username when authenticating
- `--password {any}`: the password when authenticating
- `--data {any}`: the content to post
- `--content-type {any}`: the MIME type of content to post
- `--max-time {int}`: timeout period in seconds
- `--headers {any}`: custom headers you want to add
- `--raw`: fetch contents as text rather than a table
- `--insecure`: allow insecure server connections when using SSL
- `--full`: returns the full response instead of only the body
- `--allow-errors`: do not fail if the server returns an error code

## Notes

```text
Performs HTTP DELETE operation.
```

## Examples

http delete from example.com

```bash
> http delete https://www.example.com
```

http delete from example.com, with username and password

```bash
> http delete -u myuser -p mypass https://www.example.com
```

http delete from example.com, with custom header

```bash
> http delete -H [my-header-key my-header-value] https://www.example.com
```

http delete from example.com, with body

```bash
> http delete -d 'body' https://www.example.com
```

http delete from example.com, with JSON body

```bash
> http delete -t application/json -d { field: value } https://www.example.com
```
