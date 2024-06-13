module.exports = function (eleventyConfig) {
  // call functions on eleventyConfig here

  // add support for yaml data files
  eleventyConfig.addDataExtension("yaml", (contents) => require("js-yaml").load(contents));

  // add navbar plugin
  eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));

  // these files and folders will not be processed by 11ty
  // more info: https://www.11ty.dev/docs/copy/
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/kwikken");

  // add current year to a page
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // order the left homepage items
  eleventyConfig.addCollection("HomepageLeftSorted", collection => {
    const HomepageLeftSorted = collection.getFilteredByTag("HomepageLeft")
      .sort((a, b) => {
        return Number(a.data.order) - Number(b.data.order);
      });
    return HomepageLeftSorted;
  });

  // order the right homepage items
  eleventyConfig.addCollection("HomepageRightSorted", collection => {
    const HomepageRightSorted = collection.getFilteredByTag("HomepageRight")
      .sort((a, b) => {
        return Number(a.data.order) - Number(b.data.order);
      });
    return HomepageRightSorted;
  });

  // return object options in the object starting on the line below
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_dist"
    }
  };
};