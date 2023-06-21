import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugin } from "./buildPlugin";
import { buildResolvers } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

  const {
    paths,
    mode,
    isDev
  } = options

  return {
    mode,
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
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}