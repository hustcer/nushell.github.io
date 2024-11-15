# url

**version**: 0.100.1

## **usage**:

Various commands for working with URLs.

## Signature

`> url `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Notes

```text
You must use one of the following subcommands. Using this command as-is will only produce this help message.
```

## Subcommands:

| name                                                   | type     | usage                                                                 |
| ------------------------------------------------------ | -------- | --------------------------------------------------------------------- |
| [`url build-query`](/commands/docs/url_build-query.md) | built-in | Converts record or table into query string applying percent-encoding. |
| [`url decode`](/commands/docs/url_decode.md)           | built-in | Converts a percent-encoded web safe string to a string.               |
| [`url encode`](/commands/docs/url_encode.md)           | built-in | Converts a string to a percent encoded web safe string.               |
| [`url join`](/commands/docs/url_join.md)               | built-in | Converts a record to url.                                             |
| [`url parse`](/commands/docs/url_parse.md)             | built-in | Parses a url.                                                         |
| [`url split-query`](/commands/docs/url_split-query.md) | built-in | Converts query string into table applying percent-decoding.           |
