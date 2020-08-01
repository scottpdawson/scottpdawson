---
title: "Hike"
permalink: "hike/"
author: "Scott Dawson"
eleventyNavigation:
  key: Hike
  order: 6
---

<p class="page-hed">There's nothing like <em>getting off the grid</em>. We've done some epic hikes as a family. Most of our favorites are in Oregon's Central Cascades, but there's plenty of hiking more local to us in the Adirondack and Catskill ranges, too. Here are some of our favorite hike reports!</p>

<ul class="l-grid post-grid">
  {%- for item in collections.hikePosts | reverse  -%}
  {% if loop.index <= 6 %}
  {% include '_includes/components/post-teaser.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

<h2>More Posts</h2>

<ul class="post-list">
  {%- for item in collections.hikePosts | reverse  -%}
  {% if loop.index > 6 %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>