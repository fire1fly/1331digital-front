import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    assets: path.resolve(__dirname, 'public', 'assets'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3333;
  const isDev = mode === 'development';

  const config = buildWebpackConfig({
    mode,
    paths,
    port: PORT,
    isDev,
  });

  return config;
}
