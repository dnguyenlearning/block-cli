import { Command, Flags } from "@oclif/core";
import * as chalk from "chalk";
import { IBlockCliSocket } from "../interface/socket";
import { getBlockConfig, startCompile } from "../utils/project";
import { CommandError } from "@oclif/core/lib/interfaces";
import config from "../config";
import { hostCompliedFile } from "../utils/start";

const log = console.log;

export class Start extends Command {
  private blockCliSocket: IBlockCliSocket | undefined;

  static description = "Start current block project in develop mode";

  static examples = [
    `$ block-cli start
  Compiling...
  `,
  ];

  static flags = {
    port: Flags.string({
      char: "p",
      description: "Specifies the port of the local server",
      default: "9999",
    }),
    protocol: Flags.string({
      char: "o",
      description: "Specifies the protocol of the local server",
      default: "http",
    }),
    debug: Flags.boolean({
      description: "Show debug information for cli it self",
    }),
  };

  async catch(error: CommandError) {
    log(chalk.red(error.exitCode, error.message));
    // throw error;
  }

  async run() {
    const {
      flags: { port, protocol },
    } = await this.parse(Start);

    let firstCompile = true;
    const blockConfig = getBlockConfig();

    startCompile({
      mode: "dev",
      globalFlag: false,
      webpackConfig: { entry: blockConfig.entry },
      onSucceed: () => {
        if (firstCompile) {
          log(chalk.blue("************************"));
          log(
            chalk.yellowBright(`Current packageID: ${blockConfig.packageId}`)
          );
          log(
            chalk.green(
              "Copy the following address and paste it into the developing block container:"
            )
          );
          log(
            chalk.yellowBright(
              `${protocol}://localhost:${port}/${config.releaseCodeName}`
            )
          );
          firstCompile = false;
          log(chalk.blue("************************"));
        } else {
          log(chalk.green("Recompiled successfully"));
          this.blockCliSocket?.liveReload();
        }
      },
    });

    try {
      this.blockCliSocket = hostCompliedFile(port, protocol);
      hostCompliedFile(String(Number(port) + 1), "http");
    } catch (error) {
      this.error(error as any);
    }
  }
}
