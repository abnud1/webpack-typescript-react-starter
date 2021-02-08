const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const config = {
  plugins: [autoprefixer()],
};
if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    purgecss({
      content: ["./src/**/*.tsx", "./src/**/*.ts", "index.html"],
    })
  );
  config.plugins.push(
    cssnano({
      preset: "default",
    })
  );
}
module.exports = config;
