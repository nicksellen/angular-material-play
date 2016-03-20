var webpack = require("webpack");
var path = require('path');

var prod = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel'],
        exclude: /node_modules/
      }
    ]
  }
};

if (prod) {
  module.exports.module.loaders.push({
    test: /\.html$/,
    loader: 'ngtemplate!html',
    exclude: /node_modules/
  });
} else {
  module.exports.module.loaders.push({
    test: /\.html$/,
    loader: path.join(__dirname, 'ngtemplate-hot'),
    exclude: /node_modules/
  });
}


if (prod) {
  
  module.exports.devtool = 'source-map';
    
  module.exports.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }));
  module.exports.plugins.push(new webpack.optimize.DedupePlugin());
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  }));

} else {
  
  module.exports.entry.push('webpack/hot/dev-server');
  module.exports.entry.push('webpack-hot-middleware/client');
  
  module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());
}
