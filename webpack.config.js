const path = require('path');
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"), // eslint-disable-line no-undef
        filename: "bundle.js"
    },
    module: {rules: []},
    plugins: []
};