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
                minSize: 1000,
                maxSize: 10000,
            }
        }
    },

    pwa: {
        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: './src/config/sw/service-worker.js',
            // ...other Workbox options...
        }
    }


}