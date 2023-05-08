---
title: "Using Handbrake to Optimize Movies for Uploading to Vimeo"
date: "2016-12-30"
permalink: "using-handbrake-to-optimize-movies-for-uploading-to-vimeo/"
hero: "/images/2016/12/handbrake.gif"
description: "I subscribe to Vimeo Plus, which limits my uploads to 5 Gig per week. Normally that amount of capacity does the trick, but I've also been doing some videos of my town's school music concerts. I needed to reduce my file sizes by 60-80%."
tags:
  - video
  - handbrake
---

I subscribe to Vimeo Plus, which limits my uploads to 5 Gig per week. Normally that amount of capacity does the trick, but I've also been doing some videos of my town's school music concerts. When those all come in a single week, whoa! I researched the options with Vimeo to upgrade or otherwise allow more upload capacity temporarily, and their response helpfully directed me to a section of their site that talked about optimizing your videos before uploading. You can check out their video on how to use [Handbrake](https://handbrake.fr/) (download it, it's free!) prior to uploading your video. In my testing, I saw my file sizes drop by 60-80%, which is quite amazing when you have a 7 Gig video that you obviously can't upload with a 5 Gig cap. You can [check out the whole video here](https://vimeo.com/24008730), but I also wrote down the salient points and circled the options in the (as of this writing) Handbrake interface.

- Codec H.264
- Framerate same as source
- Average bitrate 5000
- 2-pass encoding yes
- Audio 44.1 sample, 320 bitrate
