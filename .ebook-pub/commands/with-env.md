# with-env

**version**: 0.90.2

## **usage**:

Runs a block with an environment variable set.

## Signature

`> with-env (variable) (block)`

## Parameters

- `variable`: The environment variable to temporarily set.
- `block`: The block to run once the variable is set.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Set the MYENV environment variable

```bash
> with-env [MYENV "my env value"] { $env.MYENV }
```

Set by primitive value list

```bash
> with-env [X Y W Z] { $env.X }
```

Set by single row table

```bash
> with-env [[X W]; [Y Z]] { $env.W }
```

Set by key-value record

```bash
> with-env {X: "Y", W: "Z"} { [$env.X $env.W] }
```
