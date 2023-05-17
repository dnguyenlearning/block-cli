import { IBlockConfig } from "../interface/block_config";
import { readFileSync } from "fs-extra";
import * as path from "path";
import config from "../config";
import { findBlockRootDir } from "./root_dir";
import { IWebpackConfig } from "../interface/webpack";
import { getWebpackConfig } from "../webpack.config";
import * as webpack from "webpack";

export function getPackageJSON(rootDir?: string) {
  rootDir = rootDir ?? findBlockRootDir();
  return require(path.join(rootDir, "package.json"));
}

export function getBlockConfig(rootDir?: string): IBlockConfig {
  rootDir = rootDir ?? findBlockRootDir();
  return JSON.parse(
    readFileSync(path.join(rootDir!, config.blockConfigFileName), "utf8")
  );
}

type Mode = "prod" | "dev";

export function startCompile({
  mode,
  globalFlag,
  webpackConfig,
  onSucceed,
}: {
  mode: Mode;
  globalFlag: boolean;
  webpackConfig: IWebpackConfig;
  onSucceed: () => void;
}) {
  const rootDir = findBlockRootDir();
  const config = getWebpackConfig({
    dir: rootDir,
    mode,
    globalFlag,
    config: webpackConfig,
    onSucceed,
  });

  webpack(config, (err: any, stats: any) => {
    if (err) {
      if ((err as any).details!) {
        console.error((err as any).details);
      }
      console.error(err.stack || err);
    }

    if (!stats) {
      return;
    }

    const info = stats.toJson();

    if (!info) {
      return;
    }

    if (stats.hasErrors()) {
      info.errors!.forEach((e: any) => {
        console.error(e.message);
      });
    }

    if (stats.hasWarnings()) {
      info.warnings!.forEach((e: any) => {
        console.warn(e.message);
      });
    }

    info.logging && console.log(info.logging);
  });
}
