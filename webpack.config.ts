import path from 'path';
import webpack from 'webpack';
import dotenv from 'dotenv';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    assets: path.resolve(__dirname, 'public', 'assets'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3333;

  dotenv.config();
  const apiUrl = process.env.API_URL as string;

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
  });
  return config;
};
