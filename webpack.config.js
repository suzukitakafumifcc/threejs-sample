module.exports = {
  mode: 'development', // or production

  entry: './src/index.ts',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
