---
title: MediatR CQRS Command
description: Creates a new, generic mediatr CQRS command handler definition in the given project.
---
Creates a new, generic mediatr CQRS command handler definition in the given project.

## Syntax
```
dotnet code generate mediatr command-handler <name> <response> [options]
```
```
dotnet code g m ch <name> <response> [options]
```

### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new component. | `string` |
| `response`| The name of the response object. | `string` |

### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |
