## Eleventy Vite Plugin Passthrough Bug

When using the `eleventy-plugin-vite` package, it is important to register the Vite middleware in a particular order so that `--serve` resolves changed images correctly. 

I've found that adding the plugin AFTER calling the `addPassthroughCopy` method results in no updates to the page when running in --serve mode.

When adding the Vite middleware first, then calling your `addPassThroughCopy` method, images are resolved more consistently and provide for a better development time experience.

Why does the ordering matter? 🤷‍

Incorrect ordering below:

```javascript
/* Incorrect Ordering */
/* Once serve is started, edit the image using an image editor */
eleventyConfig.addPassthroughCopy("posts/**/*.{gif,jpg,png,svg,jpeg}");
eleventyConfig.addPlugin(EleventyVitePlugin);
```
    
Correct ordering:

```javascript
/* Correct Ordering */
eleventyConfig.addPlugin(EleventyVitePlugin);
eleventyConfig.addPassthroughCopy("posts/**/*.{gif,jpg,png,svg,jpeg}");
```
