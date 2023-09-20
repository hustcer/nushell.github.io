# url join

**version**: 0.85.0

## **usage**:

Converts a record to url.

## Signature

`> url join `

## Input/output types:

| input  | output |
| ------ | ------ |
| record | string |

## Examples

Outputs a url representing the contents of this record

```bash
> {
        "scheme": "http",
        "username": "",
        "password": "",
        "host": "www.pixiv.net",
        "port": "",
        "path": "/member_illust.php",
        "query": "mode=medium&illust_id=99260204",
        "fragment": "",
        "params":
        {
            "mode": "medium",
            "illust_id": "99260204"
        }
    } | url join
```

Outputs a url representing the contents of this record

```bash
> {
        "scheme": "http",
        "username": "user",
        "password": "pwd",
        "host": "www.pixiv.net",
        "port": "1234",
        "query": "test=a",
        "fragment": ""
    } | url join
```

Outputs a url representing the contents of this record

```bash
> {
        "scheme": "http",
        "host": "www.pixiv.net",
        "port": "1234",
        "path": "user",
        "fragment": "frag"
    } | url join
```
