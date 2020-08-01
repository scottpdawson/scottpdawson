---
title: "Create a Custom Post Type in Wordpress with Database Content"
date: "2017-03-27"
permalink: "create-a-database-driven-custom-post-type-in-wordpress/"
hero: "/images/2017/03/Screen-Shot-2017-03-27-at-11.50.59-AM.png"
description: "I implemented a custom page template in Wordpress that would retrieve data from the database using Ajax."
tags:
    - emoticakes
    - wordpress
---

I built a custom customer management system for my wife’s [Emoticakes](http://www.emoticakes.com/) business. Based on MySQL and PHP, it helps her manage her orders and gives her a complete picture of her customers and their orders. When we re-platformed the public-facing part of her web site to Wordpress, there were a few features that used data from her customer database. To preserve those features, I implemented a custom page template that would retrieve data from the database using Ajax. Here’s how I created the [cake gallery](http://www.emoticakes.com/gallery). The gallery uses data from custom database tables I added to the Wordpress database and administer from the customer management system.

## Step 1: Create a Custom Page Template in Wordpress

Create a custom template for the database-driven page in the root directory of the active theme. It doesn’t matter what the file is named, but it is important to start the file as shown in the code sample below with the template name. For further detail, read [Smashing Magazine's comprehensive step-by-step guide to creating custom page templates](https://www.smashingmagazine.com/2015/06/wordpress-custom-page-templates/#a-step-by-step-guide-to-creating-custom-page-templates). Here’s what my <code>template/gallery.php</code> template file looks like:

{% githubGist "57144bc69f0f85a1b7215cc016fb98bf" %}

Upload this file via FTP to your theme’s root directory. In the Wordpress admin console, create a blank page to hold the gallery. When editing that new page, choose the new gallery template under page attributes. You won't need to add any other content to the page, since everything we need is in the template.

## Step 2: Server-Side Code to Query Data

In the theme’s functions.php file, I added instructions at the top to include jQuery and also a custom JavaScript file called <code>gallery/script.js</code>. My page issues an Ajax request to <code>get/gallery/data</code>, which after checking the validity of the nonce makes a query based on the Ajax request's parameters. I've removed some of the code to build up the SQL since it's not directly relevant to the purpose of this post, but you can see how you could build up a complex query based on the selections.

{% githubGist "9fecc876c198f3a1eaf7bb61568294ca" %}

## Step 3: Client-Side Code to Request and Render Data

I include all of the details needed to request and render the data on the front end in _gallery\_script.js_. This includes making an Ajax request when the page loads and when attributes change, and rendering the results into the gallery grid.

{% githubGist "72a7fb2ebcde1bc8e631386405c489d4" %}

## Parting Thoughts

The code above should get you started, but I did add some nice bells and whistles to the interface after I had it all working. You'll see a custom overlay for more details about a cake, and also use of [jQuery Lazy Load](https://github.com/tuupola/jquery_lazyload), a fine plug-in for a gallery like this that scrolls on for a bit. Overall, I was quite pleased with how nicely this integrated with Wordpress, and gave me a way to deploy custom database-driven content fairly seamlessly. I also used the same technique on the Emoticakes testimonials page, again pulling in custom database content.
