# url join

**version**: 0.100.1

## **usage**:

Converts a record to url.

## Signature

`> url join `

## Input/output types:

| input  | output |
| ------ | ------ |
| record | string |

## Examples

Outputs a url representing the contents of this record, `params` and `query` fields must be equivalent

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

Outputs a url representing the contents of this record, "exploding" the list in `params` into multiple parameters

```bash
> {
        "scheme": "http",
        "username": "user",
        "password": "pwd",
        "host": "www.pixiv.net",
        "port": "1234",
        "params": {a: ["one", "two"], b: "three"},
        "fragment": ""
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
