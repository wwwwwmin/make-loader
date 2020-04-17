const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js'
    },
    //先去node_modules找loader，找不到到loaders文件夹下去找loader
    resolveLoader:{
        modules: ['node_modules','./loaders']
    },
    module: {
        rules:[{
            test:/\.js/,
            //loader从下到上执行，输出hello world
            use:[
                {
                    loader:'replaceLoader',
                },
                {
                    loader:'replaceLoaderAsync',
                    options:{
                        'name':'lee'
                    }
                }
            ]
        }]
    },
    output: {
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    }
}