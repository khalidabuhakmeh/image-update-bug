const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("posts/**/*.{gif,jpg,png,svg,jpeg}");
    eleventyConfig.addPlugin(EleventyVitePlugin);

    return {}
}
