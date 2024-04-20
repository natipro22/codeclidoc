---
title: Generate Enum
description: Creates a new, generic enum definition in the given project.
---
Creates a new, generic enum definition in the given project.

## Enum
```
dotnet code generate enum <name> [options]
```
```
dotnet code g e <name> [options]
```

### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new enum. | `string` |

### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |
