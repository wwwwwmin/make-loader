const loaderUtils = require('loader-utils');

module.exports = function(source){
    const options = loaderUtils.getOptions(this);
    // 声明异步loader
    // this.async
    // Tells the loader-runner that the loader intends to call back asynchronously. Returns this.callback
    const callback = this.async();

    setTimeout(() => {
        const result= source.replace('dell',options.name);
        callback(null,result);
    },1000);
}
