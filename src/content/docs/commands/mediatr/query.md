---
title: CSS
description: Creates a new, generic mediatr CQRS query definition in the given project.
---
Creates a new, generic mediatr CQRS query definition in the given project.

## Syntax
```
dotnet code generate mediatr query <name> <response> [options]
```
```
dotnet code g m q <name> <response> [options]
```

### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new css. | `string` |
| `response`| The name of response object. | `string` |

### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |
