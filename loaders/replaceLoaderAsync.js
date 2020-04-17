const loaderUtils = require('loader-utils');

module.exports = function(source){
    const options = loaderUtils.getOptions(this);
    //异步loader先调用该方法
    const callback = this.async();

    setTimeout(() => {
        const result= source.replace('dell',options.name);
        //与this.callback返回一样
        callback(null,result);
    },1000);
}