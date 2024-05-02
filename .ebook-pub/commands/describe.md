# describe

**version**: 0.93.0

## **usage**:

Describe the type and structure of the value(s) piped in.

## Signature

`> describe --no-collect --detailed --collect-lazyrecords`

## Parameters

- `--no-collect`: do not collect streams of structured data
- `--detailed`: show detailed information about the value
- `--collect-lazyrecords`: collect lazy records

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Describe the type of a string

```bash
> 'hello' | describe
```

Describe the type of a record in a detailed way

```bash
> {shell:'true', uwu:true, features: {bugs:false, multiplatform:true, speed: 10}, fib: [1 1 2 3 5 8], on_save: {|x| print $'Saving ($x)'}, first_commit: 2019-05-10, my_duration: (4min + 20sec)} | describe -d
```

Describe the type of a stream with detailed information

```bash
> [1 2 3] | each {|i| echo $i} | describe -d
```

Describe a stream of data, collecting it first

```bash
> [1 2 3] | each {|i| echo $i} | describe
```

Describe the input but do not collect streams

```bash
> [1 2 3] | each {|i| echo $i} | describe --no-collect
```
