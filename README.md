<!-- commands -->
* [`block-cli help [COMMANDS]`](#block-cli-help-commands)
* [`block-cli plugins`](#block-cli-plugins)
* [`block-cli plugins:install PLUGIN...`](#block-cli-pluginsinstall-plugin)
* [`block-cli plugins:inspect PLUGIN...`](#block-cli-pluginsinspect-plugin)
* [`block-cli plugins:install PLUGIN...`](#block-cli-pluginsinstall-plugin-1)
* [`block-cli plugins:link PLUGIN`](#block-cli-pluginslink-plugin)
* [`block-cli plugins:uninstall PLUGIN...`](#block-cli-pluginsuninstall-plugin)
* [`block-cli plugins:uninstall PLUGIN...`](#block-cli-pluginsuninstall-plugin-1)
* [`block-cli plugins:uninstall PLUGIN...`](#block-cli-pluginsuninstall-plugin-2)
* [`block-cli plugins update`](#block-cli-plugins-update)
* [`block-cli start`](#block-cli-start)

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `block-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ block-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ block-cli plugins add

EXAMPLES
  $ block-cli plugins:install myplugin 

  $ block-cli plugins:install https://github.com/someuser/someplugin

  $ block-cli plugins:install someuser/someplugin
```

## `block-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ block-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ block-cli plugins:inspect myplugin
```

## `block-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ block-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ block-cli plugins add

EXAMPLES
  $ block-cli plugins:install myplugin 

  $ block-cli plugins:install https://github.com/someuser/someplugin

  $ block-cli plugins:install someuser/someplugin
```

## `block-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ block-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ block-cli plugins:link myplugin
```

## `block-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ block-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ block-cli plugins unlink
  $ block-cli plugins remove
```

## `block-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ block-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ block-cli plugins unlink
  $ block-cli plugins remove
```

## `block-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ block-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ block-cli plugins unlink
  $ block-cli plugins remove
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

_See code: [dist/commands/start.ts](https://github.com/dnguyenlearning/block-cli/blob/v0.0.4/dist/commands/start.ts)_
<!-- commandsstop -->
