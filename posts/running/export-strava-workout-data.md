---
title: "How to Export Strava Workout Data"
date: "2020-10-16"
permalink: "export-strava-workout-data/"
hero: "/images/2017/09/xhr-requests-filled.png"
description: "If you're a numbers geek AND a fitness geek like me, you've wanted to export Strava data. You've realized with dismay that Strava doesn't have any kind of export function for the hard-earned workouts you've uploaded."
tags:
    - strava
---

If you're a numbers geek AND a fitness geek like me, you've wanted to export Strava data. You've realized with dismay that Strava doesn't have any kind of export function for the hard-earned workouts you've uploaded. Normally the lack of a feature like this wouldn't cramp my style, but I _really_ wanted to summarize my preparation for [Cayuga Trails 50](/cayuga-trails-50-2017/).

{% pictureRt "/images/2017/06/CT50-Training.jpg", "Training infographic" %}

Going through workout-by-workout just wouldn't cut it. I needed a spreadsheet I could sort, filter and enrich. The [resulting poster](/infographic-training-50-mile-race/) was just as I'd hoped for! It turns out I'm also a technology geek, so I figured out how to export Strava data into a spreadsheet so I could get the numbers I needed for my poster. There are a few steps involved, but it's not _THAT_ hard. Grab a cold one and get your browser console ready, 'cause we're going to go on a Strava data expedition!

## TL;DR: An Update

Tibor commented on my original post a while ago, and I had reason to use their code when [my wife and daughter summarized their 200-day hike streak](https://skirtrunner.com/hiking/200-day-coronavirus-hike-streak/). This is by far the easiest and quickest approach. 

1. Go to https://www.strava.com/athlete/training after signing in.
2. Open your browser's developer tools and navigate to Console window. In Chrome, you can press Command+Option+J (Mac) or Control+Shift+J (Windows, Linux, Chrome OS). In Firefox, you can press Ctrl+Shift+I or F12 (Windows, Linux) or Cmd+Opt+I (Mac)
3. Copy the code on [this page](https://gist.github.com/scottpdawson/74f85f60a7cf7fcc8ee527592dadf498) and set maxPage and activityType at the top.
4. Paste the code into the browser console and hit Enter.
5. Copy new window's content into https://konklone.io/json to convert to CSV.

Also, if you're after GPX files from multiple activities, [Alistair Adams](https://www.linkedin.com/in/alistair0adams/) sent me some code that they've used to [bulk-download GPX files from Strava](https://gist.github.com/scottpdawson/e4a9e7febf073302c46f012b46cc5676). No arbitrary wait time between downloads and some control over the saved filename, too. It's a different use case than above, but very useful if you're trying to get per-workout data out to transfer to another platform or analyze further.

## Other Approaches, Background

_**Note:** An astute reader pointed out that Strava already had an export feature. True! Go to [profile settings](https://www.strava.com/settings/profile) and you'll see "Download your data" in the right column. However, that downloads only a zip file of your owrkouts in GPX format. It doesn't supply a single spreadsheet view with oodles of data, which is what I was after. True, Strava provides a developer API, but that's a bit heavy-handed for a single query. All API-based plugins or add-ons that I tried while researching this post did not work for my use case; they either didn't work at all, didn't have all the columns I needed, or only exported a certain number of workouts._

### Step 1: The Browser Console

{% pictureRt "/images/2017/09/chrome-inspector.png", "" %}

Open up your browser console. I'm going to show you this in Chrome, which is how I'd do this, but if you use Firefox or _(shudder)_ Internet Explorer, you can do this there, too. Right-click anywhere on the web page and click Inspect.

This will load the inspector at the bottom of your browser, looking something like this:

{% picture "/images/2017/09/inspector-loaded.png", "" %}

Frightened yet? Don't be.

In the inspector, there are navigation options along the top. Click Network. Below that, you can filter network traffic by type. We're looking for XHR, so click that. Now, any data request the browser makes back to the server will be summarized here. Who knew browsers could show you such cool stuff?

{% picture "/images/2017/09/xhr-empty.png", "" %}

### Step 2: Go to Strava's My Activities Page

{% pictureRt "/images/2017/09/strava-menu.png", "" %}

Go to [Training > My Activities](https://www.strava.com/athlete/training). You get a nice tabular view of your workouts, right? Unfortunately Strava will only let you see 20 activities at a time, but you _can_ filter by sport type and search by keyword. If you want to use these filters before you export your data, so you get a subset of your workouts, now is the time to use them.

Your inspector should now look like this:

{% picture "/images/2017/09/xhr-full.png", "" %}

### Step 3: Export Strava Data

Web pages can make a lot of requests in the background for data. In this case, we're looking for one called training\_activities. In the upper left corner, under that red dot, you can search for "training" and see just those requests, which is what we're looking for.

{% picture "/images/2017/09/xhr-filtered.png", "" %}

Click the first request in the list. This is the request/response for the first 20 workouts in your list. On the right side, you can see a preview of the response for the data.

{% picture "/images/2017/09/xhr-clicked-request.png", "" %}

Above that data on the right side, click on "Response" to see the raw data.

{% picture "/images/2017/09/xhr-result.png", "" %}

Click anywhere in that raw data (that pretty red and blue text), hit Ctrl-A to select all of it, and then Ctrl-C to copy it to your clipboard. The data's in what's called JSON format, and we need to get it into another format so we can import it into the spreadsheet of our choice. Open a new tab (don't leave the Strava tab, 'cause we have more work to do!) A quick Google search for "convert JSON to CSV" gives me a result of from [convertcsv.com](http://www.convertcsv.com/json-to-csv.htm), which is exactly what I need. Paste the JSON text you copied into the text box on their page and click "Convert JSON to CSV". From there, you can download the result, or if you're a Microsoft person, you can also click JSON to Excel.

![](/images/2017/09/strava-next-page.png)Now we can go back to our Strava tab, scroll to the bottom of the 20 workouts shown in the actual web page, and click the Next button to view the next set.

When you do this, you'll see another XHR request in the inspector. This time, it's requesting workouts 21-40, whereas the first time, it was workouts 1-20. It'd be easier if Strava let you change the results per page to something other than 20, but it doesn't. Believe me: I checked. Now you'll see another response below the first one.

{% picture "/images/2017/09/xhr-second-request.png", "" %}

Repeat the steps to copy the result and convert it from JSON to CSV or Excel. Keep on going, and your Network panel will look something like this, chock full of good data:

{% picture "/images/2017/09/xhr-requests-filled.png", "" %}

Once you're finished, if you've gone the Excel route, it's a matter of copy/pasting from each spreadsheet into a master spreadsheet. If you've done CSV, you can do the same in your text editor, grouping all the CSV files into one, or import each into your spreadsheet of choice and manipulating the data from there. If you're a Windows user and feeling particularly brave, you can also follow Tom Nash's instructions on [combining CSV files automatically](http://www.tomnash.eu/how-to-combine-multiple-csv-files-into-one-using-cmd/).

### Conclusion

I can only hope that Murphy's Law applies here, and after thoughtfully writing this post, Strava releases an update that'll let you export Strava data natively. Until then, happy data mining, and happy running/cycling!

## Updates

This is one of my more popular posts and I've gotten some great comments and suggestions. Here's a sampling! 

<blockquote>Your awesome work and effort in doing this and writing it so that a nube like me is able to follow your steps is greatly appreciated. Now I can statistic the sh*t out of all my workouts. - Tom</blockquote>

Great idea! Expanding on it, here is an alternative solution for those too lazy to repeat the steps for every 20 activities. I noticed that in the second page, the training_activities URL finished by &page=2&per_page=20. Which made me think this could be scriptable (but only in the browser and session context). Googling a few ideas on how to do that made me learn that you can right click an XHR call in the browser inspector, then Copy / Copy as cURL. You can then paste the result in a bash window to download the JSON. So I created a quick shell script that looks like this:

<pre><code>#!/bin/bash
for pagenumber in {1..36}
do
[extra long curl command from above step, replacing page=2 by page=${pagenumber}] > res_$number.json
done
exit 0</code></pre>

In that case, I wanted 36 pages since I have 719 activities in Strava. This yields 36 files containing 20 activities each. Then joining them together should be easy in your favorite scripting language… - Christian

<blockquote>Awesome Scott, thanks for the clear instructions. All downloaded and now looking for a cool excel/infographic way to present my training for my next event. - Mark</blockquote>

I wrote a small web tool using the official Strava API to generate an Excel report off all activities. This might save you some json downloading by hand. Bulk json download for all activities is also implemented. See: https://entorb.net/strava - Torben

<blockquote>Thank you so much! I’m starting a data analytics program (mid-career pivot from a STEM field but no coding experience and minimal html experience) and we have to introduce ourselves through data visualization for the first class. I wanted to visualize my Strava data and was frustrated when it didn’t seem clear cut how to get it. This was PERFECT and I’m so psyched to play with this data now! Thank you! - Abigail</blockquote>

A friend of mine created http://www.stravabestefforts.com and I am working with him now to be able to extract average heart rate data for each split. His program already does a lot but heart rate data will make it even more valuable. - Patrick

<blockquote>Cheers Scott – You’ve written this so in a great and easy way to understand. I now have the spreadsheet I want so I can manipulate my training information in one easy to see document. Thanks again! – Chris
</blockquote>

This seems to work pretty well. Load a page showing 20 activities and run this snippet to automate downloading each tcx file. It spreads out downloads one/second. When it complete, click the “next page” button to move to the next 20 activities and run the snippet again. (Note that I tried to customize the file name with the download button but that doesn’t seem to work in Chrome v80.) - Stephen

<pre><code>var links = jQuery(“a[data-field-name=’name’]”);
for (var i=0; i &lt; links.length; i++) {
if (links[i].href.indexOf('export_tcx') &lt; 0) {
links[i].href = links[i].href + '/export_tcx';
}
links[i].download = "activity" + i + ".tcx";
window.setTimeout(function(link) {
console.log('downloading', link.href, link.download);
link.click();
}, 1000 * i, links[i]);
}</code></pre>