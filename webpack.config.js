const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = require('extract-text-webpack-plugin');

const src = `${__dirname}/src`;
const dist = `${__dirname}/dist`;



const paths = {
  app: `${src}/main.ts`,
  styles: `${src}/css`,
  static: {
    index: `${src}/index.html`,
    images: `${src}/img/**/*`
  }
};

const prep = {
  clean: new cleanPlugin([
    dist
  ]),
  copy: new copyPlugin([{
    from: paths.static.index
  }, {
    from: paths.static.images,
    to: 'img/',
    flatten: true
  }])
};

const extract = {
  styles: new extractPlugin('css/app.bundle.css')
};

const loaders = {
  scripts: {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: ['babel-loader'],
  },
  ts: {
    test: /\.ts$/,
    loaders: ['awesome-typescript-loader']
  },
  styles: {
    test: /\.scss$/,
    loader: [('css-loader', 'scss-loader')]
  },
  markup: {
    test: /\.html$/,
    loader: 'ngtemplate-loader!html-loader'
  },
  fonts: {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader?name=fonts/[name].[ext]'
  }
}

const config = {
  entry: {
    bundle: paths.app
  },
  devtool: 'source-map',
  module: {
    loaders: [
      loaders.scripts,
      loaders.ts,
      loaders.styles,
      loaders.markup,
      // loaders.fonts
    ]
  },
  plugins: [
    prep.clean,
    prep.copy,
    extract.styles
  ],
  output: {
    path: `${dist}/`,
    publicPath: '/',
    filename: 'js/app.bundle.js'
  },
  devServer: {
    port: 4200,
    historyApiFallback: true
  }
}

module.exports = config;


// const path = require('path');
// const sourceHtml = path.resolve(__dirname, 'src', 'index.html');
// const sourceApp = path.resolve(__dirname, 'src', 'main.ts');
// const sourceScss = path.resolve(__dirname, 'src', 'styles.scss');
// const destination = path.resolve(__dirname, 'dist');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
//
// module.exports = {
//
//
//
//   entry: sourceHtml,
//   output: {
//     path: destination,
//     filename: 'index.html'
//   },
//   plugins: [new HtmlWebpackPlugin()],
//
//   entry: sourceApp,
//   output: {
//     filename: 'index.js',
//     path: destination
//   },
//   resolve: {
//     extensions: ['.ts', '.js']
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         loaders: [
//           'awesome-typescript-loader'
//         ]
//       }
//     ]
//   },
//
//
//
//   entry: sourceScss,
//   output: {
//     filename: 'css/core.css',
//     path: destination
//   },
//   resolve: {
//     extensions: ['.scss', '.css']
//   },
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         loader:(['css-loader', 'sass-loader'])
//       }
//     ]
//   }
//
// };
