var path = require("path")

module.exports = {
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        contentBase: path.join(__dirname, './'),
        proxy: {
        }
    }
}