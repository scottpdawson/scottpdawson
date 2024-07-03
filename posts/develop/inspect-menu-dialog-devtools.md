---
title: "How to Inspect Hovered Elements (Menus, Tooltips, and Dialogs, Oh My)"
date: "2024-07-01"
permalink: "inspect-hovered-menus-tooltips-dialogs-using-devtools/"
hero: "/images/develop/debugger.png"
description: "I found this technique useful for debugging CSS inside ephemeral DOM elements."
tags:
  - devtools
---

I've been debugging a lot of CSS that's contained in ephemeral UI components (basically, items that are temporarily added to the DOM when hovered). I found this technique useful for debugging CSS inside these elements. It essentially halts JavaScript until you resume it from the debugger.

Type this into your developer tools Console:

<code>setTimeout(() => { debugger; }, 5000);</code>

It'll give you 5 seconds to interact with the page and get the element you want to appear. Developer tools will jump to the Sources tab now that you're in debug mode, and you can toggle over to Elements to do your work. When you're done, go back to Sources and click the play icon to resume (or use F8 or Command-\)
