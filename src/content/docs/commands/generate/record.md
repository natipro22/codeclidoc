---
title: Generate Record
description: Creates a new, generic record definition in the given project.
---
Creates a new, generic record definition in the given project.

## Record
```
dotnet code generate record <name> <extends> <implements...> [options]
```
```
dotnet code g r <name> <extends> <implements...> [options]
```

### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new record. | `string` |
| `extends` | The name of the base record. | `string` |
| `implements` | The names of the interfaces. | `IEnumerable<string>` |

### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |