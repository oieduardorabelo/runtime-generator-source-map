module.exports = {
  target: 'node',
  devtool: 'inline-source-map',
  module: {
    loaders: [
        {
            test: /.jsx?$/,
            loader: 'babel',
            exclude: [/node_modules/],
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /.json?$/,
            loader: 'json'
        }
    ]
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
