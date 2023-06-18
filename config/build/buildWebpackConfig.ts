import webpack from "webpack";
import { BuildOptions } from "./types/config";
import path from "path";
import { buildPlugin } from "./buildPlugin";
import { buildResolvers } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

  const {
    paths,
    mode,
    isDev
  } = options

  return {
    mode: 'production',
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugin(options),
    resolve: buildResolvers(options),
    module: {
      rules: buildLoaders(options)
  }
  }
}