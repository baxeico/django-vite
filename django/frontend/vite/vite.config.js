const { resolve } = require('path');

export default {
    build: {
        manifest: true, // adds a manifest.json
        rollupOptions: {
            input: [
              resolve(__dirname, './main.js'),
            ]
        },
        outDir:  '../static', // puts the manifest.json in PROJECT_ROOT/frontend/static/
        assetsDir:  'frontend', // puts compiled asset files (js, css) in PROJECT_ROOT/frontend/static/frontend
    },
    plugins: [],
    server: {
        port: 3001, // make sure this doesn't conflict with other ports you're using
        open: false,
    }
};
