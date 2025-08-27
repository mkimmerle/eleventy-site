module.exports = function(eleventyConfig) {
  eleventyConfig.setIncludesDirectory("_includes");
  eleventyConfig.addPassthroughCopy("art");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
}