---
title: "Simple CSS for Disabled Buttons"
date: "2013-03-19"
permalink: "simple-css-for-disabled-buttons/"
hero: "/images/develop/click-me.jpg"
description: "I came across an update in CSS3 that gives developers more control over the cursor, which can be another tool to help communicate state or affordance to the user."
tags:
    - css
    - disabled
---

I frequently observe discrete interface problems that, in isolation, are minor, but in aggregate, equal BIG problems. "Death by a thousand paper cuts," you might say. I came across an update in CSS3 that gives developers more control over the cursor, which can be another tool to help communicate state or affordance to the user.

Imagine a page that contains a button that is enabled only after the user takes a specific action, like filling out required fields on a form. In this case, you can use  <code>cursor: not-allowed</code> on the disabled button to help communicate its non-clickable state. Of course, you'll still need to ignore the click until it is active, but when the user hovers over it, they'll have a clear indication that it's not (yet) interactive.

Hover over the disabled button in the example below. If your browser supports CSS3, you'll see a nice indication on the cursor:

<iframe height="300" width="100%" src="https://codepen.io/scottpdawson/embed/Dqrck?height=600&amp;theme-id=light&amp;default-tab=result" allowfullscreen="true"></iframe>
