---
title: "Acting"
permalink: "act/"
author: "Scott Dawson"
eleventyNavigation:
    key: Act
    order: 9
---

<p class="page-hed">I have enjoyed acting since my first role as Sky Masterson in my high school's production of Guys and Dolls. After a long hiatus, <em>I've played roles in local productions</em>, mostly with <a href="http://encoreplayers.org/">Trumansburg's Encore Players Community Theatre</a>.</p>

<ul class="l-grid post-grid">
  {%- for item in collections.actPosts | reverse  -%}
  {% include '_includes/components/post-teaser.njk' %}
  {%- endfor -%}
</ul>