---
title: Welcome
permalink: /
hero: "/images/dawson-family-in-lugano.jpg"
eleventyNavigation:
  key: Welcome
  order: 1
---

Me, in introductory bullet form:

{% pictureRt "/images/2019/06/cover-ipad-mock-e1561109317865.png", "The Art of Working Remotely" %}

- I've been working remotely since 1998 as a [web designer](/design/) and [front-end developer](/develop/). I [wrote a book about remote work](/writing/), created [artofworkingremotely.com](https://artofworkingremotely.com/), and moderate the weekly [#RemoteChat](https://artofworkingremotely.com) on Twitter. I've had the good fortune of having two awesome office pets: First [Snowball](https://www.instagram.com/snowballdawson/), and now [Phoebe](https://www.instagram.com/phoebe.the.bunny/).
- I write a weekly newsletter at [wanderfull.substack.com](https://wanderfull.substack.com/). It’s all about remote work, drawing daily, and other observations about living in this modern world. Do yourself a favor and subscribe!
- How many workplaces have _cookie dough_ as a perk? I work ten paces away from my wife Amy's commercial bakery. The [Emoticakes](http://www.emoticakes.com/) kitchen is always cranking out something delicious.
- I [act](/act/), [play guitar, sing](/music/), [write](/writing/), and [write random stuff](/muse) on this web site. I dabble in illustration and post some things on [dribbble](https://dribbble.com/scottpdawson). I [drew daily in 2016](/365daydraw-challenge-completed), too.
- I write most often about fitness. If you've raced with me, either running or triathlon, you know that I enjoy writing the post-race report just as much as racing! See my [race schedule](/race-schedule/) for details, and enjoy my [running](/run/), [swimming](/swim/) and [hiking](/hike) posts. I track my workouts on [Strava](https://www.strava.com/athletes/6904418). Amy writes about her fitness exploits at [skirtrunner.com](http://skirtrunner.com/). She's a middle school teacher and built a [pretty comprehensive site for her middle school math classes](https://mathista.org).
- If you're familiar with upstate New York, you may have heard about Taughannock Falls State Park. Taughannock is the tallest single-drop waterfall east of the Rocky Mountains. I love the park so much, I built a web site about it at [taughannock.us](http://taughannock.us).

<h2>Most Recent Posts</h2>

<ul class="l-grid post-grid">
  {%- for item in collections.allPosts | reverse  -%}
  {% if loop.index <= 3 %}
  {% include '_includes/components/post-teaser.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

If were were stuck in an elevator for more than a few minutes, I'd also share these _featured posts_ with you to pass the time.

<ul class="post-list">
  {%- for item in collections.all | has_tag("data.tags", "featured") | reverse  -%}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {%- endfor -%}
</ul>

Want to know more? How about a coffee, virtual or IRL? <a href="/contact/">Contact me</a>.
