var webpack = require('webpack');
var path = require('path');
var { merge } = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack Config
var webpackConfig = {
  entry: {
    'main': './src/main.browser.ts',
  },

  output: {
    publicPath: '',
    path: path.resolve(__dirname, './dist'),
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, './src'),
      {
        // your Angular Async Route paths relative to this root directory
      }
    ),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

  ],

  module: {
    rules: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
      { 
        test: /\.css$/, 
        use: ['to-string-loader', 'css-loader'] 
      },
      { 
        test: /\.html$/, 
        use: 'raw-loader' 
      }
    ]
  }

};


// Our Webpack Defaults
var defaultConfig = {
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-cheap-module-source-map',

  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: [ '.ts', '.js' ],
    modules: [ path.resolve(__dirname, 'node_modules') ]
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src')
    },
    historyApiFallback: true,
    watchFiles: ['src/**/*'],
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },

  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      "crypto": false,
      "buffer": false,
      "process": false
    }
  }
};


module.exports = merge(defaultConfig, webpackConfig);
