---
title: Generate Endpoint
description: Creates a new, generic carter endpoint definition in the given project.
---
Creates a new, generic carter endpoint definition in the given project.

## Endpoint
```
dotnet code generate endpoint <name> [options]
```
```
dotnet code g ep <name> [options]
```

### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new endpoint. | `string` |

### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |
