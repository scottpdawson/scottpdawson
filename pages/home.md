---
title: Welcome
permalink: /
hero: "/images/dawson-family-in-lugano.jpg"
eleventyNavigation:
  key: Welcome
  order: 1
---

<div class="columnar">

<div>

I'm a [web designer](/design/) and [front-end developer](/develop/). I wrote [The Art of Working Remotely](/writing/aowr/), [Handbook for the Modern Worker](writing/handbook), and moderated a weekly #RemoteChat for 5 years. I've had the good fortune of having two awesome office pets: First [Snowball](https://www.instagram.com/snowballdawson/), and now [Phoebe](https://www.instagram.com/phoebe.the.bunny/).

I write a weekly newsletter at [wanderfull.substack.com](https://wanderfull.substack.com/). It’s all about remote work, drawing daily, and other observations about living in this modern world.

I [act](/act/), [play guitar, sing](/music/), [write books](/writing/), and [write random stuff](/muse) on this web site. I [drew daily in 2016](/365daydraw-challenge-completed), too.

Most of my posts are fitness-focused. If you've spent any time with me on trails, road, or in the water, you know that I enjoy writing the post-race report just as much as racing! See my [race schedule](/race-schedule/) for details, and enjoy my [running](/run/), [swimming](/swim/) and [hiking](/hike) posts. I track my workouts on [Strava](https://www.strava.com/athletes/6904418). Amy writes about her fitness exploits at [skirtrunner.com](http://skirtrunner.com/).

If you're familiar with upstate New York, you may know of Taughannock Falls State Park. Taughannock is the tallest single-drop waterfall east of the Rocky Mountains. I love the park so much, I built a web site about it at [taughannock.us](http://taughannock.us).

</div>
<div>

My most popular posts so far this year are:

<ul class="post-list">
  {%- for item in collections.all | has_tag("data.tags", "popular") | reverse  -%}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {%- endfor -%}
</ul>

If were were stuck in an elevator for more than a few minutes, I'd also share these posts with you to pass the time.

<ul class="post-list">
  {%- for item in collections.all | has_tag("data.tags", "featured") | reverse  -%}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {%- endfor -%}
</ul>

Want to know more? How about a coffee, virtual or IRL? <a href="/contact/">Contact me</a>.

</div>
</div>

<h2>Most Recent Posts</h2>

<ul class="l-grid post-grid">
  {%- for item in collections.allPosts | reverse  -%}
  {% if loop.index <= 3 %}
  {% include '_includes/components/post-teaser.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>
