# cd

**version**: 0.100.1

## **usage**:

Change directory.

## Signature

`> cd (path) --physical`

## Parameters

- `path`: The path to change to.
- `--physical`: use the physical directory structure; resolve symbolic links before processing instances of ..

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |
| string  | nothing |

## Examples

Change to your home directory

```bash
> cd ~
```

Change to the previous working directory (same as "cd $env.OLDPWD")

```bash
> cd -
```

Changing directory with a custom command requires 'def --env'

```bash
> def --env gohome [] { cd ~ }
```

Move two directories up in the tree (the parent directory's parent). Additional dots can be added for additional levels.

```bash
> cd ...
```

The cd command itself is often optional. Simply entering a path to a directory will cd to it.

```bash
> /home
```
