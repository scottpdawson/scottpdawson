---
title: "Transforming an Entire Page with jQuery and CSS3 Scale Transforms"
date: "2013-01-04"
permalink: "transforming-an-entire-page-with-jquery-and-css3-scale-transforms/"
hero: "/images/develop/transition.jpg"
description: "I've seen this transition used in Keynote, and I wanted to see how I could accomplish the same effect with jQuery and CSS3."
tags:
    - css
    - jquery
---

I've seen this transition used in Keynote, and I wanted to see how I could accomplish the same effect with jQuery and CSS3. I use jQuery for the animation, and CSS3 for the scale transform of the entire content area. The effect is one where the content area ducks into the background and a new content area slides in (from one of four directions, depending on the button you press). I tested this out on Chrome, where it is really quite smooth. Firefox and Safari on the Mac are a bit jittery with the animation, so that's something to look at before using this in a project. Certainly could use some re-factoring, but I'm pleased with how it turned out.

<iframe style="width: 100%; height: 400px;" src="http://jsfiddle.net/spdawson/Y4uc4/embedded/result,js,html,css/" frameborder="0"></iframe>

Practically, this could be used to enhance a site where the entire page content is being refreshed using Ajax, but illustrating a nice transition within the page after the Ajax request is finished.
