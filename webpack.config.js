var webpack = require("webpack");
var path = require("path");


//copy everything which has been prepared for serving it into the dist folder which will be created auto
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    //which file is the first file u should start your bundling journey in
    //webpack logic is that has  one or multiple entry files
    //and then it looks on dependencies of this files all the import statememnts and pull these imports
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query:{
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
    
};

module.exports = config;