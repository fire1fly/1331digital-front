import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  // mode: 'development',
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: path.resolve(__dirname, 'favicon.png'),
    })
  ],
  resolve: {
    // расширения для файлов, при импорте которых его не нужно указывать
    // import Component from './component'
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  }
};

export default config;