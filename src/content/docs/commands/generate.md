---
title: Code Generate
description: Generates and/or modifies files based on a schematic.
---

Generates and/or modifies files based on a schematic.

```
dotnet code generate [command]
```
``` 
dotnet code g [command]
```
## Subcommands
This command has the following [subcommands](#subcommands):
- [class](../class)
- [enum](../enum)
- [interface](../interface)
- [record](../record)
- [controller](../controller)
- [service](../service)
- [minimal-api](../minimal-api)
- [endpoint](../endpoint)
- [blazor](../blazor)
- [mediatr](../mediatr)
- [fluent-validation](../fluent-validation)
- [repr](../repr)

## Options
| Option | Short | Description | Value Type | Default Value |
| ------ | ----- | ----------- | ---------- | ------------- |
| `--help` | `-h`| Shows a help message for this command in the console. | bool | |
<!-- 
## Generate Commands
### Class
```
dotnet code generate class <name> <extends> <implements...> [options]
```
```
dotnet code generate c <name> <extends> <implements...> [options]
```
Creates a new, generic class definition in the given project.

#### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new class. | `string` |
| `extends` | The name of the base class. | `string` |
| `implements` | The names of the interfaces. | `IEnumerable<string>` |

#### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--abstract` | `-a` | abstract class | bool | false |
| `--sealed` | `-s` | seald class | bool | false |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |

### Enum
```
dotnet code generate enum <name> [options]
```
```
dotnet code generate e <name> [options]
```
Creates a new, generic enum definition in the given project.

#### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new enum. | `string` |

#### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |

### Interface
```
dotnet code generate interface <name> <extends...> [options]
```
```
dotnet code generate i <name> <extends...> [options]
```
Creates a new, generic interface definition in the given project.

#### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new class. | `string` |
| `extends` | The names of the base interfaces. | `IEnumerable<string>` |

#### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--prefix` | `-x` | The name prefix for the interface. | bool | false |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |

### Record
```
dotnet code generate record <name> <extends> <implements...> [options]
```
```
dotnet code generate r <name> <extends> <implements...> [options]
```
Creates a new, generic record definition in the given project.

#### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new record. | `string` |
| `extends` | The name of the base record. | `string` |
| `implements` | The names of the interfaces. | `IEnumerable<string>` |

#### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |

### Controller
```
dotnet code generate controller <name> [options]
```
```
dotnet code generate ct <name> [options]
```
Creates a new, generic controller definition in the given project.

#### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new controller. | `string` |

#### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |

### Service
```
dotnet code generate service <name> <extends> <implements...> [options]
```
```
dotnet code generate s <name> <extends> <implements...> [options]
```
Creates a new, generic service definition in the given project.

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

### Minimal API
```
dotnet code generate minimal-api <name> [options]
```
```
dotnet code generate ma <name> [options]
```
Creates a new, generic minimal api definition in the given project.

#### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new minimal api. | `string` |

#### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | |

### Endpoint
```
dotnet code generate endpoint <name> [options]
```
```
dotnet code generate ep <name> [options]
```
Creates a new, generic carter endpoint definition in the given project.

#### Parameters
| Parameter | Description | Value Type |
| --------- | ----------- | ---------- |
| `name`| The name of the new endpoint. | `string` |

#### Options
| Option | Short | Description | Value Type | Default |
| ------ | ----- | ----------- | ---------- | ------- |
| `--path` | `-p` | The path of the file. | string | |
| `--help` | `-h` |  Shows help text. | bool | | -->
