---
title: "Design"
permalink: "design/"
author: "Scott Dawson"
eleventyNavigation:
  key: Design
  order: 2
---

<p class="page-hed"><em>I love art and design.</em> Whether analog or digital, on a screen or in the real world, there's something magical about creating something that others can see, react to, and experience.</p>

<ul class="l-grid post-grid">
  {%- for item in collections.designPosts | reverse  -%}
  {% if loop.index <= 3 %}
  {% include '_includes/components/post-teaser.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

<h2>More Posts</h2>
<ul class="post-list">
  {%- for item in collections.designPosts | reverse  -%}
  {% if loop.index > 3 %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>
