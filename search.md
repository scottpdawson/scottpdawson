---
title: Search
permalink: "/search/"
description: "Scott Dawson's web site, where he waxes poetic about web design, development, running, singing, playing, and generally making a ruckus."
layout: "layouts/page.njk"
---

<h2>Search this site</h2>

<form action="https://www.google.com/search" method="get" class="search">
  <input type="hidden" name="q" id="q" value="site:https://scottpdawson.com">
  <p><label for="search-str">Search <small>(results displayed on Google's site)</small></label>
  <br /><input type="text" name="q" id="search-str" style="font-size: 1.5em; padding: 5px;"></p>
  <p><button type="submit" class="submit">Search</button></p>
</form>

<h2>Tagged Posts</h2>
<p>
  You might also find what you're looking for by exploring the tags.
</p>
<ul>
{% for tag in collections.tagList %}
  {% set tagUrl %}/tags/{{ tag }}/{% endset %}
    {% if collections[tag].length >= 2 %}
<li><a href="{{ tagUrl | url }}" class="tag">{{ tag }}</a> ({{ collections[tag].length }})</li>
    {% endif %}
{% endfor %}
</ul>

