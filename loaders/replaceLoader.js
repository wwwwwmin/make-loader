const loaderUtils = require('loader-utils');

// 不能写成箭头函数，因为要使用this,
module.exports = function(source){
    //this.query为options参数，官方推荐使用loader-utils（https://webpack.js.org/api/loaders/#thisquery）
    console.log(this.query);
    // return source.replace('dell',this.query.name)
/* 
    将文件里的dell均改成dellLee 
    return source.replace('dell','dellLee')
*/
    const options = loaderUtils.getOptions(this);
    return source.replace('dell',options.name)
    
}