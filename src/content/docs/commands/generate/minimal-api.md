---
title: Generate Minimal API
description: Creates a new, generic minimal api definition in the given project.
---
Creates a new, generic minimal api definition in the given project.
## Minimal API
```
dotnet code generate minimal-api <name> [options]
```
```
dotnet code g ma <name> [options]
```
### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new minimal api. | `string` |

### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |