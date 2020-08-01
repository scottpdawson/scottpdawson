---
title: "Dot Matrix: Just for Fun"
date: "2013-05-28"
permalink: "dot-matrix-just-for-fun/"
hero: "/images/develop/dot-matrix.png"
description: "I envisioned a matrix of dots that, when hovered, would flip their color and slowly fade away."
tags:
    - css
---

I had a lot of fun putting this together! It was just a personal project to see if I could do it. I envisioned a matrix of dots that, when hovered, would flip their color and slowly fade away. It works like a charm on the desktop. You can use keyboard shortcuts to change the color, and the CSS :hover attribute and CSS3 transitions make the effect work quite nicely.

My hope was to have it work just as well on mobile. In the end, I got it working most of the way, though there are surely some performance optimizations I can make with the speed of determining whether a drag action occurred through a dot or not. I would also love to have it support multiple concurrent touches. I didn't use any kind of framework like Sencha, though that would be a logical next step.

You can [see this in a separate browser window](http://codepen.io/DawsonMediaD/full/rtjcI), or check out the Pen below. Fun stuff! _Full disclosure:_ something's off with this in Firefox, but it tests out in Chrome and Safari.

<iframe height="600" width="100%" src="https://codepen.io/scottpdawson/embed/rtjcI?height=600&amp;theme-id=light&amp;default-tab=result" allowfullscreen="true"></iframe>
