---
title: "Creating a Variable-Width Modal Dialog Using Bootstrap 3"
date: "2013-10-16"
permalink: "creating-a-variable-width-modal-dialog-using-bootstrap-3/"
hero: "/images/develop/bootstrap-modal.png"
description: "I've enjoyed using Bootstrap 3 lately, but was limited by the fixed-width of the modal dialog boxes. I wanted to override the default Bootstrap modal so it was variable-width and height-optimized."
tags:
    - bootstrap
    - modal
---

I've enjoyed using Bootstrap 3 lately, but was limited by the fixed-width of the modal dialog boxes. I wanted to override the default Bootstrap modal so it was variable-width and height-optimized.

I created CSS classes to handle the width, and the optional introduction of a scrollbar for extra-tall content. Then, I just add "modal-wide" to the main modal div. In the example below, I'm using 90%.

This works fine as-is, as long as the height of the content in the modal dialog is not too tall. If that's the case, we need to introduce a max-height to that content area. I use jQuery to calculate this based off the browser height. The result: the modal will be only as tall as necessary, and will provide a scrollbar if needed.

<iframe height="600" width="100%" src="https://codepen.io/scottpdawson/embed/byDqv?height=600&amp;theme-id=light&amp;default-tab=result" allowfullscreen="true"></iframe>
