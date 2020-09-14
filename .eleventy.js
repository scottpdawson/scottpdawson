const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const UglifyJS = require("uglify-es");
const htmlmin = require("html-minifier");
const slugify = require("slugify");
const moment = require("moment");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addFilter("galleryImage", img => {
    return img + '?nf_resize=smartcrop&w=213&h=213';
  });

  eleventyConfig.addFilter("heroImage", img => {
    return img + '?nf_resize=smartcrop&w=723&h=560';
  });
  
  eleventyConfig.addFilter("contentImage", img => {
    return img + '?nf_resize=fit&w=700';
  });

  eleventyConfig.addFilter("squash", require("./filters/squash.js") );

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("momentDate", dateObj => {
    return moment.utc(dateObj).format('MMMM D, YYYY');
  });

  eleventyConfig.addFilter("momentYear", dateObj => {
    return moment.utc(dateObj).format('YYYY');
  });

  eleventyConfig.addFilter("momentDay", dateObj => {
    return moment.utc(dateObj).format('D');
  });

  eleventyConfig.addFilter("momentMonth", dateObj => {
    return moment.utc(dateObj).format('MMM');
  });

  eleventyConfig.addFilter("mmToHHMM", num => {
    var hours = Math.floor(num / 60);  
    var minutes = num % 60;
    return hours + ":" + minutes;    
  });

  eleventyConfig.addFilter("weekNumberFor2020HMP", dateObj => {
    let startDate = moment.utc("2020-09-07");
    let thisDate = moment.utc(dateObj);
    return thisDate.diff(startDate, 'weeks') + 1;
  });

  eleventyConfig.addFilter("totalRunMiles", collection => {
    let totalRunMiles = 0;
    collection.forEach((item) => {
      if (item.type == "Run") {
        totalRunMiles += item.miles;
      }
    });
    return totalRunMiles;
  });

  eleventyConfig.addFilter("totalRunMinutes", collection => {
    let totalRunMinutes = 0;
    collection.forEach((item) => {
      if (item.type == "Run") {
        totalRunMinutes += item.minutes;
      }
    });
    return totalRunMinutes;
  });

  eleventyConfig.addFilter("getWeekArrayFor2020HMP", collection => {
    let weekArray = [];
    collection.forEach((item) => {
      let startDate = moment.utc("2020-09-07");
      let thisDate = moment.utc(item.date);
      let weekNumber = thisDate.diff(startDate, 'weeks') + 1;
      if (!weekArray.indexOf(weekNumber) !== -1) {
        weekArray.push(thisDate.diff(startDate, 'weeks') + 1);
      }
    });
    return [...new Set(weekArray)];
  });

  eleventyConfig.addFilter("getYearArray", collection => {
    let yearArray = [];
    collection.forEach((item) => {
      yearArray.push(moment.utc(item.date).format('YYYY'));
    });
    return [...new Set(yearArray)];
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Minify JS
  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  eleventyConfig.addCollection("allPosts", (collection) =>
    collection.getFilteredByGlob("posts/*/*.md")
  );

  eleventyConfig.addCollection("runPosts", (collection) =>
    collection.getFilteredByGlob("posts/running/*.md")
  );

  eleventyConfig.addCollection("nonRaceRunPosts", (collection) =>
    collection.getFilteredByGlob("posts/running/*.md").filter( item => {
      // return only if distance is not there
      return ( !item.data.distance ? item : false );
    })
  );

  eleventyConfig.addCollection("hikePosts", (collection) =>
    collection.getFilteredByGlob("posts/hiking/*.md")
  );

  eleventyConfig.addCollection("swimPosts", (collection) =>
    collection.getFilteredByGlob("posts/swimming/*.md")
  );

  eleventyConfig.addCollection("designPosts", (collection) =>
    collection.getFilteredByGlob("posts/design/*.md")
  );

  eleventyConfig.addCollection("developPosts", (collection) =>
    collection.getFilteredByGlob("posts/develop/*.md")
  );

  eleventyConfig.addCollection("actPosts", (collection) =>
    collection.getFilteredByGlob("posts/acting/*.md")
  );

  eleventyConfig.addCollection("musePosts", (collection) =>
    collection.getFilteredByGlob("posts/musing/*.md")
  );

  eleventyConfig.addCollection("tagList", require("./utils/getTagList.js"));

  eleventyConfig.addNunjucksShortcode("lightbox", function(arr) {
    
    // dormant: was using this for a grid-style gallery, but far prefer flickity below
    // 
    // let imageString = '';
    // for (i = 0; i < arr.length; i++) {
    //   imageString = imageString + `<img src="${arr[i].image}?nf_resize=fit&w=1024" title="${arr[i].caption}" />`;
    // }
    // return(
    //   `<div class="lightbox-group">${imageString}</div>`
    // );

    let imageString = '';
    for (i = 0; i < arr.length; i++) {
      imageString = imageString + `<div class="carousel-cell">
        <img 
          src="${arr[i].image}?nf_resize=fit&h=800" 
          title="${arr[i].caption}" 
          title="${arr[i].caption}" />
      </div>`;
    }
    return(
      `<div class="main-carousel" data-flickity='{ "fullscreen": true, "wrapAround": "true", "autoPlay": "3000", "pauseAutoPlayOnHover": true }'>${imageString}</div>`
    );
  });

  const embedVimeo = require("eleventy-plugin-vimeo-embed");
  eleventyConfig.addPlugin(embedVimeo);

  const pluginEmbedTweet = require("eleventy-plugin-embed-tweet");
  let tweetEmbedOptions = {
      useInlineStyles: true,
      autoEmbed: true,
  }
  eleventyConfig.addPlugin(pluginEmbedTweet, tweetEmbedOptions);

  const embedInstagram = require("eleventy-plugin-embed-instagram");
  eleventyConfig.addPlugin(embedInstagram);

  const pluginRss = require("@11ty/eleventy-plugin-rss");
  eleventyConfig.addPlugin(pluginRss);

  const readingTime = require('eleventy-plugin-reading-time');
  eleventyConfig.addPlugin(readingTime);

  eleventyConfig.addShortcode("picture", require("./utils/picture.js"));
  eleventyConfig.addShortcode("pictureRt", require("./utils/pictureRt.js"));
  eleventyConfig.addShortcode("pictureRtSm", require("./utils/pictureRtSm.js"));
  eleventyConfig.addShortcode("githubGist", require("./utils/githubGist.js"));
  eleventyConfig.addShortcode("currentYear", function() {
    const year = new Date().getFullYear();
    return `${year}`;
  });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // Universal slug filter strips unsafe chars from URLs
  eleventyConfig.addFilter("slugify", function(str) {
    return slugify(str, {
      lower: true,
      replacement: "-",
      remove: /[*+~.·,()'"`´%!?¿:@]/g
    });
  });

  eleventyConfig.addFilter('has_tag', function( arr, key, value ) {
    return arr.filter( item => {
        const keys = key.split( '.' );
        const reduce = keys.reduce( ( object, key ) => {
            return object[ key ];
        }, item );
        const str = String( reduce );

        return ( str.includes( value ) ? item : false );
    });
  });

  eleventyConfig.addFilter('lacks_tag', function( arr, key, value ) {
    return arr.filter( item => {
        const keys = key.split( '.' );
        const reduce = keys.reduce( ( object, key ) => {
            return object[ key ];
        }, item );
        const str = String( reduce );

        return ( str.includes( value ) ? false : item );
    });
  });

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("static/");
  eleventyConfig.addPassthroughCopy("images/");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("_includes/assets/");

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  var markdownItAttrs = require('markdown-it-attrs');
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let opts = {
    permalink: false
  };

  eleventyConfig.setLibrary("md", markdownIt(options)
    .use(markdownItAnchor, opts)
    .use(markdownItAttrs, {
      leftDelimiter: '{',
      rightDelimiter: '}',
      allowedAttributes: []  // empty array = all attributes are allowed
    })
  );

  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
