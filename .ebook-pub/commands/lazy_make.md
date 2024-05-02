# lazy make

**version**: 0.93.0

## **usage**:

Create a lazy record.

## Signature

`> lazy make --columns --get-value`

## Parameters

- `--columns {list<string>}`: Closure that gets called when the LazyRecord needs to list the available column names
- `--get-value {closure(string)}`: Closure to call when a value needs to be produced on demand

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | record |

## Examples

Create a lazy record

```bash
> lazy make --columns ["haskell", "futures", "nushell"] --get-value { |lazything| $lazything + "!" }
```

Test the laziness of lazy records

```bash
> lazy make --columns ["hello"] --get-value { |key| print $"getting ($key)!"; $key | str upcase }
```

## Notes

```text
Lazy records are special records that only evaluate their values once the property is requested.
        For example, when printing a lazy record, all of its fields will be collected. But when accessing
        a specific property, only it will be evaluated.

        Note that this is unrelated to the lazyframes feature bundled with dataframes.
```
