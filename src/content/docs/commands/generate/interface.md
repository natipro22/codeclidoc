---
title: Generate Interface
description: Creates a new, generic interface definition in the given project.
---
Creates a new, generic interface definition in the given project.

## Interface
```
dotnet code generate interface <name> <extends...> [options]
```
```
dotnet code g i <name> <extends...> [options]
```

### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new class. | `string` |
| `extends` | The names of the base interfaces. | `IEnumerable<string>` |

### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--prefix` | `-x` | The name prefix for the interface. | bool | false |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |