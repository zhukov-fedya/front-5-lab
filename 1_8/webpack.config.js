const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = (env) => {     // env - флаг для передачи окружения
  const environment = env.environment || 'local';
  
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
    },
    plugins: [
      new Dotenv({      // используется плагин dotenv-webpack
        path: `./.env.${environment}`, 
      }),
    ],
  };
};