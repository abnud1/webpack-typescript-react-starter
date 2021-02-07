const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require("cssnano");
const autoprefixer = require('autoprefixer')
const config = {
    plugins: [
        purgecss({
            content: ['./src/**/*.tsx', './src/**/*.ts','index.html']
        }),
        autoprefixer()
    ]
}
if (process.env.NODE_ENV === "production") {
    config.plugins.push(cssnano({
        preset: 'default'
    }))
}
module.exports = config;