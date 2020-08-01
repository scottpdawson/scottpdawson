---
title: "Sass versus LESS for CSS"
date: "2013-02-16"
permalink: "sass-versus-less-for-css/"
hero: "/images/develop/css.jpg"
description: "I just finished a great lynda.com course titled 'CSS with LESS and Sass', and really enjoyed learning more about these CSS pre-processors."
tags:
    - css
    - sass
    - less
---

I just finished a great lynda.com course titled [CSS with LESS and Sass](http://www.lynda.com/CSS-tutorials/CSS-LESS-SASS/107921-2.html), and really enjoyed learning more about these CSS pre-processors. As I went along, I created two pens over at codepen.io to try out the different syntaxes, and took note of a few things along the way.

## LESS

[LESS](http://lesscss.org) was presented first, so a lot of my comments are about how Sass differs from LESS. I found the syntax quite comfortable to read and write.

<iframe height="300" width="100%" src="https://codepen.io/scottpdawson/embed/Fxkqf?height=600&amp;theme-id=light&amp;default-tab=result" allowfullscreen="true"></iframe>

## Sass

I found [Sass](http://sass-lang.com) to be similarly comfortable to read and write, with a few exceptions (below)

<iframe height="300" width="100%" src="https://codepen.io/scottpdawson/embed/zJAxv?height=600&amp;theme-id=light&amp;default-tab=result" allowfullscreen="true"></iframe>

## Comparison

- The Sass @mixin/@include syntax made for more text in my file, but I found it was easier to decipher what was a mixin. So, this was a toss-up for me.
- For Sass, I found in my testing on Codepen that a @mixin needs to be defined **before** it was used in the file, unlike Less, which let me define it anywhere.
- Sass @mixin doesn't support $arguments like LESS does, again a minor point.
- Sass contains the **if** statement, but I found I could mimic that logic with LESS guards. That said, LESS doesn't support conditionals or looping.
- LESS has an interesting concept of pattern matching, which Sass doesn't seem to have (see sample Less pen above)
- Sass has a few more features and functions, for color (grayscale, complement, invert), math (abs, min, max), and has more OOTB formatting options.

## Conclusion and References

I think I'll use a bit of both in some real projects, starting with LESS. I did install the [Simpless](http://wearekiss.com/simpless) compiler, which seems easy enough to configure to "watch" for changes in my LESS files and convert to CSS. I know that there are equivalent functions for Sass, so I'll see which I prefer. I'm also going to look around for some mixin libraries, in addition to those cited below.

- For Sass/SCSS: [Compass](http://compass-style.org) / [matthieua's Sass Library](https://github.com/matthieua/sass-css3-mixins)
- For LESS: [LESS Hat](http://lesshat.com/) / [Bootstrap](http://twitter.github.com/bootstrap/)
- [Sass and LESS Comparison](https://gist.github.com/wilmoore/820035)
- [Sass and LESS Library comparisons](https://gist.github.com/wilmoore/820035)
- [Smashing Magazine: An Introduction to LESS, And Comparison to Sass](http://coding.smashingmagazine.com/2011/09/09/an-introduction-to-less-and-comparison-to-sass/)
