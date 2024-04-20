---
title: CLI Overview and Command Reference
description: The Code CLI is a command-line interface tool that you use to initialize, develop,  scaffold, and maintain .NET C# applications directly from a command shell.
---

The Code CLI is a command-line interface tool that you use to initialize, develop,  scaffold, and maintain .NET C# applications directly from a command shell.

## Installing Code CLI
Install the CLI using the nuget package manager:
```
dotnet tool install --global CodeCLI
```

## Basic Workflow
Invoke the tool on the command line through the `dotnet code` executable. Online help is available on the command line. Enter the following to list commands or options for a given command with a short description.

```
dotnet code --help
```
## CLI command-language syntax
```
dotnet code [command] [...parameters] [...options]
```
## Command Overview
| Command | Short | Description |
| ------- | ----- | ----------- |
| `generate` |    `g` | Generates and/or modifies files based on a schematic. |
| `install` | `i` | install the specified nuget packege |
| `config` | `c` | install and configure dependency to the project |
| `.` | | open solution in visual studio |



## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
