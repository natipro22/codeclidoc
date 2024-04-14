---
title: Fluent Validation Validator
description: Creates a new, generic fluent validation validator class definition in the given project.
---
Creates a new, generic fluent validation validator class definition in the given project.

## Syntax
```
dotnet code generate fluent-validation validator <name> [options]
```
```
dotnet code g fv v <name> [options]
```

### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new validator. | `string` |

### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |
