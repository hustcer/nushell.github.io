# do

**version**: 0.80.0

## **usage**:

Run a closure, providing it with the pipeline input.

## Signature

`> do (closure) ...rest --ignore-errors --ignore-shell-errors --ignore-program-errors --capture-errors`

## Parameters

- `closure`: the closure to run
- `...rest`: the parameter(s) for the closure
- `--ignore-errors`: ignore errors as the closure runs
- `--ignore-shell-errors`: ignore shell errors as the closure runs
- `--ignore-program-errors`: ignore external program errors as the closure runs
- `--capture-errors`: catch errors as the closure runs, and return them

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
> do -i { thisisnotarealcommand }
```

Run the closure and ignore shell errors

```bash
> do -s { thisisnotarealcommand }
```

Run the closure and ignore external program errors

```bash
> do -p { nu -c 'exit 1' }; echo "I'll still run"
```

Abort the pipeline if a program returns a non-zero exit code

```bash
> do -c { nu -c 'exit 1' } | myscarycommand
```

Run the closure, with a positional parameter

```bash
> do {|x| 100 + $x } 77
```

Run the closure, with input

```bash
> 77 | do {|x| 100 + $in }
```
