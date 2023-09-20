# ps

**version**: 0.85.0

## **usage**:

View information about system processes.

## Signature

`> ps --long`

## Parameters

- `--long`: list all available columns for each entry

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

List the system processes

```bash
> ps
```

List the top 5 system processes with the highest memory usage

```bash
> ps | sort-by mem | last 5
```

List the top 3 system processes with the highest CPU usage

```bash
> ps | sort-by cpu | last 3
```

List the system processes with 'nu' in their names

```bash
> ps | where name =~ 'nu'
```

Get the parent process id of the current nu process

```bash
> ps | where pid == $nu.pid | get ppid
```
