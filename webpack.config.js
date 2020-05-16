const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    main: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'shared'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
      styles: path.resolve(__dirname, 'src/styles'),
      images: path.resolve(__dirname, 'src/images')
    }
  },
  mode: process.env.NODE_ENV,
  //devtool : 'source-map' ,
  //devtool: process.env.NODE_ENV === 'development' ? 'source-map' : '',
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
    },
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        plugins: [],
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    },
    {
      test: /\.(svg)$/,
      exclude: /fonts/, /* dont want svg fonts from fonts folder to be included */
      use: [
        {
          loader: 'svg-url-loader',
          options: {
            noquotes: true
          }
        }
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [{
        loader: 'file-loader',
        options: {
          limit: 30000
        }
      }]
    },
    {
      test: /\.(jpg|png|jpeg|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]'
        }
      }
    }
    ]
  },
  devServer: {
    historyApiFallback:{
            index:'/'
        },
    contentBase:"/src/",
   inline:true,
   stats:"errors-only"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body',
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[chunkhash].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](!css-loader)/,
          name: 'vendors',
          enforce: true,
          chunks: 'all'
        }
      }
    }
  }
};
