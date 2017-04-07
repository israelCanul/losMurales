var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('/css/[name].css');

const webpack = require('webpack');
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('commons', '/common.js');

module.exports = {
  entry: {
    index :'./src/index.js',
    reservation :'./src/reservation.js',
    gallery :'./src/gallery.js',
    menu_chef :'./src/menu_chef.js',
    contac_us :'./src/contac_us.js',
    testimonial :'./src/testimonial.js',
  },
  output:{
    path:'./build/',
    publicPath: '/',
    filename: '/js/[name].js',
  },
  module:{
    loaders:[
        {
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015','react','stage-2']
          }
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader')
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!')
        }
    ]
  },
  plugins: [extractCSS,commonsPlugin],
  devServer: {
    historyApiFallback: true,
    contentBase: './build',
    inline: true,
    hot: false,
  }
}
