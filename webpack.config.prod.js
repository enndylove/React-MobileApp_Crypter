// webpack.config.js
function newFunction() {
    require.resolve('stream-browserify');
    require.resolve('path-browserify');
    require.resolve('os-browserify/browser');
    require.resolve('crypto-browserify');
    require.resolve('assert/');
}
newFunction()

