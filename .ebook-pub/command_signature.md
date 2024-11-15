# Command signature

nu commands contains a signature section, take [`str distance`](/commands/docs/str_distance.md) as example, the signature is like this:

```
Signatures(Cell paths are supported):
  <string> | str distance <string> -> <int>
```

The first type name before `|` describes the type of input pipeline. The command name is followed by the required argument type(s) for the command. The output type is `int` and given after `->`.

`(Cell paths are supported)` indicates that you can provide cell paths for `str distance` to apply an operation at the given cell path(s) in a nested structure or table, and replace the column or field with the result, like: `ls | str distance 'nushell' 'name'`

Here is another one example, [`str join`](/commands/docs/str_join.md):

```
Signatures:
  list<string> | str join <string?> -> <string>
```

It says that [`str join`](/commands/docs/str_join.md) command expect input pipeline is a list of string, and take optional `string` type argument, finally the output type is `string`.

Some commands don't accept or require data through the input pipeline, thus the input type will be `<nothing>`.
The same is true for the output type if the command returns `null` (e.g. [`rm`](/commands/docs/rm.md)).
