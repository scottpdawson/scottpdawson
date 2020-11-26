---
title: "Building a Content Accordion with CSS-Only Toggle Switches (Checkbox Hack)"
date: "2020-11-26"
permalink: "content-accordion-css-only-toggle-switch/"
hero: "/images/2020/11/toggle-code.png"
description: "I decided to create a page that talked about what I was training for, and provided a way for me to provide bits of commentary as the training plan unfolded. The result is a nice mix of Eleventy magic, a CSS-only toggle switch, and the checkbox hack."
tags:
    - css
---

I love to write about running. One of the most rewarding things about training for a race is the journey, not necessarily the destination. I view races as the topping on a sundae, because the real transformation happens during the weeks leading up to a race. When I started my [16-week training plan for my Christmas Half Marathon](/training-christmas-half-marathon-2020/), I knew I wanted to write about the training, but not as I've done in the past with a weekly post. I felt like this called for something more bite-sized. So, I decided to create a page that talked about what I was training for, and provided a way for me to provide bits of commentary as the training plan unfolded. 

Since I converted this web site to Eleventy recently, a natural choice for doing this was to have the commentary in a JSON file. The page would be dynamically generated based on updates to the file. If you're curiuos about how I did this with Eleventy, check out the [raw template](https://raw.githubusercontent.com/scottpdawson/scottpdawson/master/posts/running/all-i-want-for-christmas-2020.md) and the [source JSON file](https://github.com/scottpdawson/scottpdawson/blob/master/posts/running/all-i-want-for-christmas-2020.11tydata.json).

I didn't want to overwhelm my readers with a massive list of dispatches from the road. Rather, I designed it so the current week was expanded, while prior weeks showed a paragraph recap and an option to view the individual dispatches from the week. I used [Marcus Burnette's All-CSS Toggle Switch (Checkbox Hack)](https://codepen.io/mburnette/pen/LxNxNg) as a starting point and extended it to include section visibility and to have the header act as part of the toggle using a duplicate label. Here's the code I used:

<iframe height="400" width="100%" src="https://codepen.io/scottpdawson/embed/RwGbNPV?height=400&amp;theme-id=light&amp;default-tab=result" allowfullscreen="true"></iframe>

Here's how it looks, and you can always click through to [the actual page](/training-christmas-half-marathon-2020/) to see it in action. I really like how the page exposes the most recent week (a little Eleventy magic) and the others are one click away.

{% picture "/images/2020/11/toggle-screenshot.png", "My CSS-only toggle switch in action" %}




