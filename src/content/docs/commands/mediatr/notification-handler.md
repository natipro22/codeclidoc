---
title: MediatR Notification
description: Creates a new, generic MediatR notification handler definition in the given project.
---
Creates a new, generic MediatR notification handler definition in the given project.

## Syntax
```
dotnet code generate mediatr notification-handler <name> [options]
```
```
dotnet code g m nh <name> [options]
```

### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new notification. | `string` |

### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |
