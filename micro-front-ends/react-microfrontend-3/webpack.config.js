const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = 
          require('webpack/lib/container/ModuleFederationPlugin');

const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    port: 8083,
  },
  module: {
    rules: [
        {
            /* The following line to ask babel 
             to compile any file with extension
             .js */
            test: /\.js?$/,

            /* exclude node_modules directory from babel. 
            Babel will not compile any files in this directory*/
            exclude: /node_modules/,

            // To Use babel Loader
            loader: 'babel-loader',
            options: {

                presets: ['@babel/preset-env' /* to transfer any advansed ES to ES5 */, 
                          '@babel/preset-react'], // to compile react to ES5
            },
        },
    ],
},

  plugins: [
    new ModuleFederationPlugin({
      name: 'MicroFrontEnd3',
      filename: 'remoteEntry.js',
      exposes: {
        './MicroFrontEnd3Index': './src/index',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

