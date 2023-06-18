import webpack from "webpack";
import path from "path";
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from "./types/config";

export function buildPlugin({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.assets, 'favicon.png')
    })
  ]
}