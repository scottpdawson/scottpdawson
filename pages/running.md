---
title: "Running"
permalink: "run/"
hero: "/images/2016/08/AC-LucifersCrossing-20160821-0143.jpg"
author: "Scott Dawson"
eleventyNavigation:
  key: Run
  order: 5
---

**I was not a runner as a kid.** Sure, I _ran_, but it was always part of something else, like soccer. I discovered running as a way to maintain fitness and enjoy the challenge and camaraderie of racing as an adult. At many races, I enjoy seeing the variety of ages and capabilities represented, and I hope to be a runner for the rest of my life! I periodically write about my races, with race reports below. You can also take a look at my [race schedule, results, and race reports](/race-schedule/).

{% pictureRt "/images/2016/03/18767980921_a662e52bdb_k.jpg", "Wading through a stream crossing at Cayuga Trails 50" %}

## Trail & Ultra: 50 mi
<ul>
{%- for post in collections.ultra | has_tag("data.tags", "cayuga trails") -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>

## Trail & Ultra: 50 km
<ul>
{%- for post in collections.all -%}
    {%- if post.data.distance == '50 km' -%}
        <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {%- endif -%}
{%- endfor -%}
</ul>

## Trail & Ultra: Lucifer's Crossing
<ul>
{%- for post in collections.race | has_tag("data.tags", "lucifers crossing") -%}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>

## Trail & Ultra: Other

<ul>
{%- for post in collections.ultra | has_tag("data.tags", "other") -%}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>

## Marathons

<ul>
{%- for post in collections.race -%}
    {%- if post.data.distance == '26.2 mi' -%}
        <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {%- endif -%}
{%- endfor -%}
</ul>

## Half Marathons

<ul>
{%- for post in collections.runPosts -%}
    {%- if post.data.distance == '13.1 mi' -%}
        <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {%- endif -%}
{%- endfor -%}
</ul>

## 5K

<ul>
{%- for post in collections.race | lacks_tag("data.tags", "pgxc") -%}
    {%- if post.data.distance == '5 km' -%}
        <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {%- endif -%}
{%- endfor -%}
</ul>

## Mile

<ul>
{%- for post in collections.race -%}
    {%- if post.data.distance == '1 mi' -%}
        <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {%- endif -%}
{%- endfor -%}
</ul>

## Cross Country

<ul>
{%- for post in collections.all | has_tag("data.tags", "pgxc") -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>

## Triathlon

<ul>
{%- for post in collections.all | has_tag("data.tags", "triathlon") -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>

## Running Commentary

<ul>
{%- for post in collections.all | has_tag("data.tags", "running commentary") -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>

## Notable Runs

All of my workouts are over on [Strava](https://www.strava.com/athletes/6904418), but some were quite special, so I wrote about 'em:

<ul>
{%- for post in collections.all | has_tag("data.tags", "notable runs") -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>