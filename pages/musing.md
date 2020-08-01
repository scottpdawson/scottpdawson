---
title: "Muse"
permalink: "muse/"
author: "Scott Dawson"
eleventyNavigation:
  key: Muse
  order: 10
---

<p class="page-hed">We all have a drawer in our kitchen that's chock full of miscellanea. You know the one, right? This section is this site's <em>kitchen$@#%</em> drawer. Some posts are meant to entertain, others to inform. Some might make you cry, and others ... well, maybe they just shouldn't be here.</p>

<ul class="l-grid post-grid">
  {%- for item in collections.musePosts | reverse  -%}
  {% if loop.index <= 6 %}
  {% include '_includes/components/post-teaser.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

<h2>More Posts</h2>
<ul class="post-list">
  {%- for item in collections.musePosts | reverse  -%}
  {% if loop.index > 6 %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>