import { Command, Flags } from "@oclif/core";
import * as chalk from "chalk";
import { IBlockCliSocket } from "../interface/socket";
import { getBlockConfig } from "../utils/project";
import { CommandError } from "@oclif/core/lib/interfaces";

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
      default: "https",
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

    log(chalk.blue("Hello world!"));
  }
}
