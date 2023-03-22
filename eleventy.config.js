const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = function(eleventyConfig) {

    /* Incorrect Ordering */
    /* Once serve is started, edit the image using an image editor */
    eleventyConfig.addPassthroughCopy("posts/**/*.{gif,jpg,png,svg,jpeg}");
    eleventyConfig.addPlugin(EleventyVitePlugin);


    /* Correct Ordering */
    // eleventyConfig.addPlugin(EleventyVitePlugin);
    // eleventyConfig.addPassthroughCopy("posts/**/*.{gif,jpg,png,svg,jpeg}");

    return {}
}
