import * as findUp from "find-up";
import * as path from "path";
import Config from "../config";
import * as chalk from "chalk";

// The directory where where block.config.json is located is block project root dir
export function findBlockRootDir() {
  const configPath = findUp.sync(Config.blockConfigFileName, {
    cwd: process.cwd(),
  });

  if (configPath) {
    return path.join(configPath, "../");
  }
  throw new Error(
    chalk.redBright(
      `Can not find ${Config.blockConfigFileName} , You should run command in your block project.`
    )
  );
}
