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
                minSize: 10000,
                maxSize: 250000,
            }
        }
    }


}