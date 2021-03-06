const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        // All JavaScript files will be transform with Babel
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        // Preprocess our own .css files
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      // Handle images and objects
      {
        test: /\.(gif|svg|png|jpg|eot|otf|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10 * 1024,
              publicPath: './',
              name: 'react-app/[name].[ext]',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      /* eslint-disable */
      'components': path.resolve(__dirname, 'src/components'), // prettier-ignore
      'containers': path.resolve(__dirname, 'src/containers'), // prettier-ignore
      'data': path.resolve(__dirname, 'src/data'), // prettier-ignore
      'images': path.resolve(__dirname, 'src/images'), // prettier-ignore
      'actions': path.resolve(__dirname, 'src/redux/actions'), // prettier-ignore
      'constants': path.resolve(__dirname, 'src/redux/constants'), // prettier-ignore
      'reducers': path.resolve(__dirname, 'src/redux/reducers'), // prettier-ignore
      'selectors': path.resolve(__dirname, 'src/redux/selectors'), // prettier-ignore
      'utils': path.resolve(__dirname, 'src/utils'), // prettier-ignore
      'root': path.resolve(__dirname, './') // prettier-ignore
      /* eslint-enable */
    },
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './build',
    port: 3000,
    publicPath: 'http://localhost:3000',
    hot: true,
    stats: {
      // Handle logs from webpack-dev-server (WDS)
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errorDetails: false,
      publicPath: false,
      entrypoints: false,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      template: path.resolve('./public/index.html'),
    }),
  ],
};
