# do

**version**: 0.90.2

## **usage**:

Run a closure, providing it with the pipeline input.

## Signature

`> do (closure) ...rest --ignore-errors --ignore-shell-errors --ignore-program-errors --capture-errors --env`

## Parameters

- `closure`: The closure to run.
- `...rest`: The parameter(s) for the closure.
- `--ignore-errors`: ignore errors as the closure runs
- `--ignore-shell-errors`: ignore shell errors as the closure runs
- `--ignore-program-errors`: ignore external program errors as the closure runs
- `--capture-errors`: catch errors as the closure runs, and return them
- `--env`: keep the environment defined inside the command

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Run the closure

```bash
> do { echo hello }
```

Run a stored first-class closure

```bash
> let text = "I am enclosed"; let hello = {|| echo $text}; do $hello
```

Run the closure and ignore both shell and external program errors

```bash
> do --ignore-errors { thisisnotarealcommand }
```

Run the closure and ignore shell errors

```bash
> do --ignore-shell-errors { thisisnotarealcommand }
```

Run the closure and ignore external program errors

```bash
> do --ignore-program-errors { nu --commands 'exit 1' }; echo "I'll still run"
```

Abort the pipeline if a program returns a non-zero exit code

```bash
> do --capture-errors { nu --commands 'exit 1' } | myscarycommand
```

Run the closure, with a positional parameter

```bash
> do {|x| 100 + $x } 77
```

Run the closure, with input

```bash
> 77 | do {|x| 100 + $in }
```

Run the closure and keep changes to the environment

```bash
> do --env { $env.foo = 'bar' }; $env.foo
```
