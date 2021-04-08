const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const config = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ["./src/**/*.tsx", "./src/**/*.ts", "index.html"],
    }),
  ],
};
if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    cssnano({
      preset: "default",
    })
  );
}
module.exports = config;
