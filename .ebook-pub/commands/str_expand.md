# str expand

**version**: 0.90.2

## **usage**:

Generates all possible combinations defined in brace expansion syntax.

## Signature

`> str expand --path`

## Parameters

- `--path`: Replaces all backslashes with double backslashes, useful for Path.

## Input/output types:

| input          | output                 |
| -------------- | ---------------------- |
| list\<string\> | list\<list\<string\>\> |
| string         | list\<string\>         |

## Examples

Define a range inside braces to produce a list of string.

```bash
> "{3..5}" | str expand
```

Ignore the next character after the backslash ('\')

```bash
> 'A{B\,,C}' | str expand
```

Commas that are not inside any braces need to be skipped.

```bash
> 'Welcome\, {home,mon ami}!' | str expand
```

Use double backslashes to add a backslash.

```bash
> 'A{B\\,C}' | str expand
```

Export comma separated values inside braces (`{}`) to a string list.

```bash
> "{apple,banana,cherry}" | str expand
```

If the piped data is path, you may want to use --path flag, or else manually replace the backslashes with double backslashes.

```bash
> 'C:\{Users,Windows}' | str expand --path
```

Brace expressions can be used one after another.

```bash
> "A{b,c}D{e,f}G" | str expand
```

Collection may include an empty item. It can be put at the start of the list.

```bash
> "A{,B,C}" | str expand
```

Empty item can be at the end of the collection.

```bash
> "A{B,C,}" | str expand
```

Empty item can be in the middle of the collection.

```bash
> "A{B,,C}" | str expand
```

Also, it is possible to use one inside another. Here is a real-world example, that creates files:

```bash
> "A{B{1,3},C{2,5}}D" | str expand
```

## Notes

```text
This syntax may seem familiar with `glob {A,B}.C`. The difference is glob relies on filesystem, but str expand is not. Inside braces, we put variants. Then basically we're creating all possible outcomes.
```
