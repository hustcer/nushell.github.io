# ulimit

**version**: 0.93.0

## **usage**:

Set or get resource usage limits.

## Signature

`> ulimit (limit) --soft --hard --all --core-size --data-size --file-size --file-descriptor-count --stack-size --cpu-time --virtual-memory-size`

## Parameters

- `limit`: Limit value.
- `--soft`: Sets soft resource limit
- `--hard`: Sets hard resource limit
- `--all`: Prints all current limits
- `--core-size`: Maximum size of core files created
- `--data-size`: Maximum size of a process's data segment
- `--file-size`: Maximum size of files created by the shell
- `--file-descriptor-count`: Maximum number of open file descriptors
- `--stack-size`: Maximum stack size
- `--cpu-time`: Maximum amount of CPU time in seconds
- `--virtual-memory-size`: Maximum amount of virtual memory available to each process

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |

## Examples

Print all current limits

```bash
> ulimit -a
```

Print specified limits

```bash
> ulimit --core-size --data-size --file-size
```

Set limit

```bash
> ulimit --core-size 102400
```

Set stack size soft limit

```bash
> ulimit -s -S 10240
```

Set virtual memory size hard limit

```bash
> ulimit -v -H 10240
```

Set core size limit to unlimited

```bash
> ulimit -c unlimited
```
