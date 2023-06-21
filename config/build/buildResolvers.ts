import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  return {
    // расширения для файлов, при импорте которых его не нужно указывать
    // import Component from './component'
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  }
}