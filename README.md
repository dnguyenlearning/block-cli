<!-- commands -->

- [`block-cli help [COMMANDS]`](#block-cli-help-commands)
- [`block-cli plugins`](#block-cli-plugins)
- [`block-cli plugins:install PLUGIN...`](#block-cli-pluginsinstall-plugin)
- [`block-cli plugins:inspect PLUGIN...`](#block-cli-pluginsinspect-plugin)
- [`block-cli plugins:install PLUGIN...`](#block-cli-pluginsinstall-plugin-1)
- [`block-cli plugins:link PLUGIN`](#block-cli-pluginslink-plugin)
- [`block-cli plugins:uninstall PLUGIN...`](#block-cli-pluginsuninstall-plugin)
- [`block-cli plugins:uninstall PLUGIN...`](#block-cli-pluginsuninstall-plugin-1)
- [`block-cli plugins:uninstall PLUGIN...`](#block-cli-pluginsuninstall-plugin-2)
- [`block-cli plugins update`](#block-cli-plugins-update)
- [`block-cli start`](#block-cli-start)

## `block-cli help [COMMANDS]`

Display help for block-cli.

```
USAGE
  $ block-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for block-cli.
```

## `block-cli plugins`

List installed plugins.

```
USAGE
  $ block-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ block-cli plugins
```

## `block-cli plugins update`

Update installed plugins.

```
USAGE
  $ block-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `block-cli start`

Start current block project in develop mode

```
USAGE
  $ block-cli start [-p <value>] [-o <value>] [--debug]

FLAGS
  -o, --protocol=<value>  [default: https] Specifies the protocol of the local server
  -p, --port=<value>      [default: 9999] Specifies the port of the local server
  --debug                 Show debug information for cli it self

DESCRIPTION
  Start current block project in develop mode

EXAMPLES
  $ block-cli start
    Compiling...
```

_See code: [dist/commands/start.ts](https://github.com/dnguyenlearning/block-cli/blob/v0.0.3/dist/commands/start.ts)_

<!-- commandsstop -->
