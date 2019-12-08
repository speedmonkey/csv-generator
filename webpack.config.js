const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
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
      {
        // Handle Images and others files as Object
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          name: '[name]-[hash].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      /* eslint-disable */
      'root': path.resolve(__dirname, './'), // prettier-ignore
      'components': path.resolve(__dirname, 'src/components'), // prettier-ignore
      'containers': path.resolve(__dirname, 'src/containers'), // prettier-ignore
      'images': path.resolve(__dirname, 'src/images'), // prettier-ignore
      'actions': path.resolve(__dirname, 'src/redux/actions'), // prettier-ignore
      'constants': path.resolve(__dirname, 'src/redux/constants'), // prettier-ignore
      'reducers': path.resolve(__dirname, 'src/redux/reducers'), // prettier-ignore
      'selectors': path.resolve(__dirname, 'src/redux/selectors') // prettier-ignore
      /* eslint-enable */
    },
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/build',
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/build/',
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
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
