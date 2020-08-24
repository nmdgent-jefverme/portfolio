// Webpack uses this to work with directories
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// This is the main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = (env, argv) => {
  // check if we are in development mode or not
  const dev = argv.mode === 'development';

  return ({
    // set the mode of our project
    mode: argv.mode,

    // your main js file
    entry: path.resolve(__dirname, 'src/js/app.js'),

    // define the output
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.min.js',
    },

    // define the different modules
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            dev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|gif|jpe?g)$/,
          use: [
            {
              options: {
                name: "[name].[ext]",
                outputPath: "images/"
              },
              loader: "file-loader"
            }
          ]
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'fonts/[name].[hash:7].[ext]',
          },
        },
        {
          test: /\.(webm|mp4)$/,
          loader: 'file-loader',
          options: {
            name: 'videos/[name].[hash:7].[ext]',
          },
        },
      ],
    },

    // define the plugins
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: dev ? '[name].css' : '[name].[hash].css',
        chunkFilename: dev ? '[id].css' : '[id].[hash].css',
      })
    ],
    devServer: {
      port: process.env.PORT || 8080,
      contentBase: './src',
      historyApiFallback: false,
    },
  });
};
