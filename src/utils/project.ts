import { IBlockConfig } from "../interface/block_config";
import { readFileSync } from "fs-extra";
import * as path from "path";
import config from "../config";
import { findBlockRootDir } from "./root_dir";

export function getBlockConfig(rootDir?: string): IBlockConfig {
  rootDir = rootDir ?? findBlockRootDir();
  return JSON.parse(
    readFileSync(path.join(rootDir!, config.blockConfigFileName), "utf8")
  );
}
