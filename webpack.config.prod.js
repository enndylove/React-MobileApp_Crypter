// webpack.config.js

newFunction(),
function newFunction() {
    resolve: {
        fallback: {
            stream: require.resolve('stream-browserify');
            path: require.resolve('path-browserify');
            os: require.resolve('os-browserify/browser');
            crypto: require.resolve('crypto-browserify');
            assert: require.resolve('assert/');
        }
    }
}

