---
title: Generate Class
description: Creates a new, generic class definition in the given project.
---
Creates a new, generic class definition in the given project.

## Class
```
dotnet code generate class <name> <extends> <implements...> [options]
```
```
dotnet code g c <name> <extends> <implements...> [options]
```

### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new class. | `string` |
| `extends` | The name of the base class. | `string` |
| `implements` | The names of the interfaces. | `IEnumerable<string>` |

### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--abstract` | `-a` | abstract class | bool | false |
| `--sealed` | `-s` | seald class | bool | false |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |
