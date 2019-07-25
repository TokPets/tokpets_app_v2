module.exports = {

    indexPath: 'index.html',

    assetsDir: '',
    outputDir: 'dist',

    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    filenameHashing: true,

    lintOnSave: true,

    runtimeCompiler: false,
    productionSourceMap: false,

    configureWebpack: {
        optimization: {
            splitChunks: {
                minSize: 10,
                maxSize: 2500000,
            }
        }
    }


}