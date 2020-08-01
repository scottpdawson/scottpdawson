---
title: "Use Bookmarklets to Access the Same Web Page in Different Environments"
date: "2014-01-08"
permalink: "use-bookmarklets-to-access-the-same-web-page-in-different-environments/"
hero: "/images/develop/bookmark.jpg"
description: "If you have several environments that you develop and test in, you may find it useful to create bookmarklets for frequently-accessed pages."
tags:
    - bookmarklet
---

If you have several environments that you develop and test in, you may find it useful to create [bookmarklets](http://en.wikipedia.org/wiki/Bookmarklet) for frequently-accessed pages.

For example, let's say I have four environments: local, development, integration and testing. For each, I may want to easily get to one of six pages with a complex path, without having to navigate to that path. I _could_ create six bookmarks for each environment, but who wants to create 24 bookmarks?

I can **create a single bookmarklet**, and use it to get to the corresponding path on the site I'm signed into. Here's the syntax (replace /path with the specific path you're bookmarking):

<iframe height="200" width="100%" src="https://codepen.io/scottpdawson/embed/igqdB?height=200&amp;theme-id=light&amp;default-tab=js" allowfullscreen="true"></iframe>

Once you have the bookmarklet in your browser, sign into the environment you're testing in, and then click the bookmarklet to jump to that path.

Want to find out how to add a bookmarklet to your browser? Type "add a bookmarklet to" into Google, and check the suggested search completions for the browser you're using.
