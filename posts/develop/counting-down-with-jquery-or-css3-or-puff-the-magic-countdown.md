---
title: "Counting down with jQuery or CSS3 (or, Puff the Magic Countdown)"
date: "2013-07-14"
permalink: "counting-down-with-jquery-or-css3-or-puff-the-magic-countdown/"
hero: "/images/develop/real-racing-3.jpg"
description: "I wanted to replicate a 'text puff' effect on a web page, so went about it using two different techniques: jQuery UI (puff transition) and CSS3 animation of transition, transform and opacity."
tags:
    - countdown
    - timer
---

I've been playing [Real Racing 3](http://www.ea.com/uk/real-racing-3-ios) on iPhone lately, and as you change places during the race, your place number at the top right corner has a cool puff effect to animate the place change. I wanted to replicate this effect on a web page, so went about it using two different techniques: jQuery UI (puff transition) and CSS3 animation of transition, transform and opacity.

## jQuery UI (puff transition)

<iframe height="300" width="100%" src="https://codepen.io/scottpdawson/embed/zFlej?height=300&amp;theme-id=light&amp;default-tab=result" allowfullscreen="true"></iframe>

## CSS3 Animation

<iframe height="300" width="100%" src="https://codepen.io/scottpdawson/embed/Gzwbl?height=300&amp;theme-id=light&amp;default-tab=result" allowfullscreen="true"></iframe>

In the CSS3 version, I noticed a full-screen white flicker on Chrome when the animation cycled. A few searches later, I found a combination of CSS that removed the flicker, applied to the element being animated. You'll see this code commented in the pen.

<pre><code>-webkit-perspective: 1000;  
-webkit-backface-visibility: hidden;
</code></pre>