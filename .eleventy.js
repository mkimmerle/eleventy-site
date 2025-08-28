const sass = require("sass");
const path = require('node:path');

module.exports = function(eleventyConfig) {
  eleventyConfig.setIncludesDirectory("_includes");
  eleventyConfig.addPassthroughCopy("art");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("work");

  eleventyConfig.addTemplateFormats("scss");

  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css", // optional, default: "html"

    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath)
      if (parsed.name !== 'main') return
      let result = sass.compileString(inputContent, {
          loadPaths: [parsed.dir || '.', this.config.dir.includes],
          style: 'compressed',
        });

      return async (data) => {
        return result.css;
      };
    },
  });
}