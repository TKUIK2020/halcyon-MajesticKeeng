module.exports = {
    mode: 'development',
    entry: "./Lab15/js/vue.js",
    output: {
        filename: "bundle.js"
    },
  
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
          }
        }
      ]
    }
  }