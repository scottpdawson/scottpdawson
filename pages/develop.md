---
title: "Develop"
permalink: "develop/"
author: "Scott Dawson"
eleventyNavigation:
  key: Develop
  order: 3
---

<p class="page-hed">In addition to user experience design, I'm also a <em>front-end web developer</em>. Over my career at Citi, Intercontinental Exchange, and my own freelance projects, I've worked on a wide variety of projects. My portfolio is below, and I also love to write about my projects.</p>

<ul class="l-grid post-grid">
  {%- for item in collections.developPosts | reverse  -%}
  {% if loop.index <= 3 %}
  {% include '_includes/components/post-teaser.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

<h2>More Posts</h2>
<ul class="post-list">
  {%- for item in collections.developPosts | reverse  -%}
  {% if loop.index > 3 %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

## Portfolio

Here are some selected works from my design and development portfolio. As a designer and front-end developer, I have experience with many phases of a project's lifecycle, from ideation (requirements, wireframes and prototyping), detailed design (graphics and designing in the browser) and development (HTML, CSS, JavaScript, PHP, MySQL, Angular, jqGrid, highCharts)

{% lightbox [
  { caption: "", image: "/images/2016/05/vantage.png" },
  { caption: "", image: "/images/2016/05/ymca.png" },
  { caption: "", image: "/images/2016/05/ulysses_historical_society.png" },
  { caption: "", image: "/images/2016/05/true_wind.png" },
  { caption: "", image: "/images/2016/05/tcsd_foundation.png" },
  { caption: "", image: "/images/2016/05/taughannock.png" },
  { caption: "", image: "/images/2016/05/skydive_harbor_springs.png" },
  { caption: "", image: "/images/2016/05/sanzo.png" },
  { caption: "", image: "/images/2016/05/racker_centers.png" },
  { caption: "", image: "/images/2016/05/lunchtaker.png" },
  { caption: "", image: "/images/2016/05/emoticakes.png" },
  { caption: "", image: "/images/2016/05/christmas_bureau.png" },
  { caption: "", image: "/images/2016/05/cayuga_compost.png" },
  { caption: "", image: "/images/2016/05/cpb_video_library.png" },
  { caption: "", image: "/images/2016/05/citi_specialty_sites.png" },
  { caption: "", image: "/images/2016/05/cpb_web_standards_library.png" },
  { caption: "", image: "/images/2016/05/cpb_client_prototype.png" },
  { caption: "", image: "/images/2016/05/cpb_client_site.png" },
  { caption: "", image: "/images/2016/05/cpb_product_search.png" },
  { caption: "", image: "/images/2016/05/cpb_public_site.png" }
]%}