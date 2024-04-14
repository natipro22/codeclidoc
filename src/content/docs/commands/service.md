---
title: Generate Service
description: Creates a new, generic service definition in the given project.
---
Creates a new, generic service definition in the given project.

### Service
```
dotnet code generate service <name> <extends> <implements...> [options]
```
```
dotnet code g s <name> <extends> <implements...> [options]
```

#### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new service. | `string` |
| `extends` | The name of the base service. | `string` |
| `implements` | The names of the interfaces. | `IEnumerable<string>` |

#### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--abstract` | `-a` | abstract service | bool | false |
| `--sealed` | `-s` | seald service | bool | false |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |