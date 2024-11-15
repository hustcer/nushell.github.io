# query webpage-info

**version**: 0.100.1

## **usage**:

uses the webpage crate to extract info from html: title, description, language, links, RSS feeds, Opengraph, Schema.org, and more

## Signature

`> query webpage-info `

## Input/output types:

| input  | output |
| ------ | ------ |
| string | record |

## Examples

extract detailed info from phoronix.com website

```bash
> http get https://phoronix.com | query webpage-info
```
