---
title: "Using CSS to Responsively Embed Vimeo on Wordpress"
date: "2017-02-03"
permalink: "using-css-responsively-embed-vimeo-wordpress/"
hero: "/images/develop/vimeo-video-embed.png"
description: "When you embed a Vimeo video on a Wordpress web site by using a short code, there's only an option to pass in a static width and height."
---

{% pictureRtSm "/images/2017/02/IMG_7874_iphone6_gold_side2.png", "Vimeo embed on mobile" %}

When you [embed a Vimeo video on a Wordpress web site by using a short code](https://en.support.wordpress.com/videos/vimeo), there's only an option to pass in a static width and height. In this responsive world, I tried this out using 100% as the width, but that didn't work. My wife's emoticakes.com Wordpress site had a video that looked great, but on mobile the video's fixed width blew it out of the content area, rendering the text around it incredibly small.

My solution uses CSS as a workaround. This snippet of code, if you add it to your Wordpress theme's CSS, will make the video scale to a maximum of the container's width. Further, since the video letterboxes if the aspect ratio doesn't match the video player's dimensions, it sets a maximum height if the viewport is less than 600 pixels wide. The result, shown at right, is oh-so-sweet.

<iframe height="300" width="100%" src="https://codepen.io/scottpdawson/embed/PWedqx?height=300&amp;theme-id=light&amp;default-tab=css" allowfullscreen="true"></iframe>
