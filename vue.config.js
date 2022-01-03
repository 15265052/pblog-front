module.exports = {
    devServer: {
        port: 8888,
        proxy: {  //配置跨域
            '/api': {
              target: 'http://localhost:8080/api/',
              changOrigin: true,  //允许跨域
              pathRewrite: {
                '^/api': '' 
              }
            },
          }
    },
    lintOnSave: false

}
