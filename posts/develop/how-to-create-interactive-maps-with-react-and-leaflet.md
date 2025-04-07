---
title: "How To Create Interactive Maps with React and Leaflet"
date: "2020-05-28"
permalink: "how-to-create-interactive-maps-with-react-and-leaflet/"
hero: "/images/develop/ski-resort-finder.jpg"
description: "After being dedicated mountain pass holders, then Ikon pass holders, then nomads purchasing advance tickets, I thought it'd be cool to create a map-based way of discovering new ski resorts."
tags:
  - leaflet
  - maps
  - react
  - popular
---

My family is chock full of avid skiers. We put our two kids through ski racing programs, and now they can ski pretty much anything we throw at them. After being dedicated mountain pass holders, then Ikon pass holders, then nomads purchasing advance tickets, I thought it'd be cool to create a map-based way of discovering new ski resorts. It'd be a cool way to visualize where they were, and whether they were included in popular pass programs like Ikon and Epic.

## Creating a Simple Interactive Map

I've been programming in React at work, and have used the Google Maps API in the past. When I came across [this Smashing Magazine post](https://www.smashingmagazine.com/2020/02/javascript-maps-react-leaflet/), I tried to follow the steps to create my own map. The post didn’t link out to a repo of a fully-working example, so I created this pared back version of my final project as a resource for anyone wanting to do this on their own. Feel free to fork the repo and use it as a basis for your own map development! Check out the video below for a walkthrough of these links:

- [Simple Interactive Map: Ten Highest Peaks of the Oregon Cascades](https://react-leaflet-maps.netlify.app)
- [GitHub Repository: React Leaflet Maps](https://github.com/scottpdawson/react-leaflet-maps)

<iframe src="https://www.loom.com/embed/23ec098f7ae443968107f854fc1a2d6a" frameborder="0" webkitallowfullscreen mozallowfullscreen="" allowfullscreen="" style="width: 100%; height: 370px;"></iframe>

## Ski Resort Finder

Now it's time to get fancy, both with design and functionality. The site is deployed at [skiresorts.netlify.app](https://skiresorts.netlify.app/), and here's a quick video demo of the functionality.

<iframe src="https://www.loom.com/embed/b1117c683ba7498aa6ce8bcf292480d1" frameborder="0" webkitallowfullscreen mozallowfullscreen="" allowfullscreen="" style="width: 100%; height: 370px;"></iframe>

Now, on to the code! I'll be referring to snippets of code from [my GitHub repository](https://github.com/scottpdawson/ski-resort-finder) so head over there if you want a fuller picture.

### Getting the Ski Resort Data

The app's componentDidMount function fires off an axios GET request for the ski resort data from [skimap.org's developer API](https://skimap.org/pages/Developers). Once that result comes back, I map each resort to a "resorts" array. Each object in the array contains information about the resort, including the name, details about the lifts and runs, and a geographic point to plot the resort. Some of the resorts in the API provide a series of polygons. In those cases, I'm using a function [getCenterOfPolygon](https://github.com/scottpdawson/ski-resort-finder/blob/master/src/components/utils/AppUtils.js) to get the center point of the first polygon in the data set. It works well enough!

{% githubGist "fa2a46faf465f5b6da30135d353719ad" %}

You see that Firebase request in the above code? The skimap.org data doesn't include pass information, so I created a dataset in Firebase to store resort names that belong to either the Epic or Ikon portfolios. This is where the data caveat comes in: if any resort information is not accurate, it can be updated by anyone over at [openskimap.org](https://openskimap.org). However, I am maintaining the pass flags for Epic and Ikon resorts in my own Firebase account. I used a [CSV to JSON converter](https://www.csvjson.com/csv2json) to get the Epic/Ikon data from a Google Sheet into the format that Firebase can import.

### Plotting the Ski Resort Data

{% githubGist "7b8866327bddab0ed6eb7a062b13e31e" %}

Now that I have the ski resort data all in the app, it's time to plot the points. This is where I had the most fun, since there are a lot of interactions and design elements. Here are the notable parts of the code:

### Map Tiles

There are a ton of options for the [map tiles](https://leaflet-extras.github.io/leaflet-providers/preview/). I chose an option that didn't need any license or key (see: line 16). Depending on the map you choose, you should make sure you're attributing the source properly (see: line 15).

### Leaflet Map Performance

When you're rendering thousands of items on a map, don't use images. I had started with images and it was way too sluggish. Instead, leaflet provides SVG markers, so that's what CircleMarker is in the code. You specify the color, opacity, radius, and weight. Also on the performance front, I set the leaflet map's attributes for updateWhenZooming (false), updateWhenIdle (true), and preferCanvas (true) to optimize performance.

### Leaflet Popup Interaction Model

I made an early mistake where I was creating a Popup for each resort on the map. Wow, that slowed things down! The way this is written now, there's one Popup, which makes a lot more sense. When you click a CircleMarker, line 26 sets the state's activeResort. An activeResort in turn shows the Popup using the activeResort's point to plot the position. Lastly, my custom SkiMapTooltip component is a richly-styled component to show the resort's details. I pass the activeResort and the units (metric or imperial) to this component.

## Deploying the App to Netlify

The last step was pretty simple, actually. I deployed the application via Netlify using [these instructions](https://medium.com/@thevatsalsaglani/working-with-firebase-real-time-database-using-reactjs-and-uikit-and-launching-to-netlify-ff92419289b2) (see point 6). This was my first experience with Netlify, and it was really smooth. I also wanted to make sure that I hid my Firebase API key, and Netlify made that easy, too. I updated my code per [this article's advice on hiding API keys in React .env files](https://medium.com/better-programming/how-to-hide-your-api-keys-c2b952bc07e6). Then, in Netlify, I set my REACT_APP_FIREBASE_API_KEY as an environment variable. Now, whenever I push a code update to GitHub, Netlify automatically picks up the change, builds the project, and deploys it.

## Recap & Links

That's it! A simple map with React and Leaflet, and a more complicated map built on those simple principles.

- [GitHub Repository](https://github.com/scottpdawson/ski-resort-finder)
- [Interactive Ski Resort Map](https://skiresorts.netlify.app/)
