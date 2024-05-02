# metadata set

**version**: 0.93.0

## **usage**:

Set the metadata for items in the stream.

## Signature

`> metadata set --datasource-ls --datasource-filepath`

## Parameters

- `--datasource-ls`: Assign the DataSource::Ls metadata to the input
- `--datasource-filepath {path}`: Assign the DataSource::FilePath metadata to the input

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Set the metadata of a table literal

```bash
> [[name color]; [Cargo.lock '#ff0000'] [Cargo.toml '#00ff00'] [README.md '#0000ff']] | metadata set --datasource-ls
```

Set the metadata of a file path

```bash
> 'crates' | metadata set --datasource-filepath $'(pwd)/crates' | metadata
```
