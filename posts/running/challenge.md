---
title: "FLRC Challenge 2021"
date: "2021-12-31"
permalink: "flrc-challenge-2021/"
hero: "/images/2021/challenge/cover.jpg"
usesCharts: true
description: ""
tags:
  - flrc
  - running
---

## "Did you race this year?"

I was asked this question a lot this year at the few social gatherings we enjoyed. The answer: well, I kind of did, but not the kind of race I normally sign up for. Instead of toeing the line at a series of trail and road races, the Finger Lakes Runners Club put on the [FLRC Challenge](https://fingerlakesrunners.org/challenge/). The asynchronous challenge sent runners to 10 area courses, split evenly between road and trail, with distances from 1 mile to the half marathon. Participants aimed to run, walk, or hike as many courses as they could in 2021.

I played a minor role in the creation of the challenge's [dynamic leaderboard](https://challenge.fingerlakesrunners.org/), specifically with design and usability work. [Steve Desmond](https://twitter.com/stevedesmond_ca) did the lion's share of the development work, and [Adam Engst](https://twitter.com/adamengst) brought it all together from a requirements perspective. So, with the leaderboard ready to tell us how we were doing, I was jazzed to get running.

Amy and I signed up for the challenge together, and while we ran most of our efforts at the same time, we rarely ran together. Between March and June, we exclusively alternated between the longest options on the weekend: Skunk Cabbage and Black Diamond. These long weekend runs proved to be a fine distraction from the pandemic stress that was all around us. On June 15, I was forced to take a break to have – and recover from – hernia surgery. Yuck! I was sad to have to take such a big pause, but was grateful to resume running on July 24. As the chart below shows, our summer runs picked up in frequency, mostly due to three-day weekends and a missed vacation to Oregon that kept us home. That extra week of vacation got us the rest of the way to finishing all ten courses in the challenge. Since then, we ran when we could, opting for the longer trail options on the weekends.

The challenge provided a few things to focus on: speed, frequency, overall mileage, or average speed. I chose to focus on speed-based points ([a complex calculus you can read more about](https://fingerlakesrunners.org/challenge/rules/)) and was pleased to end up with 818.93 points. Good enough for 7th place! I was really pleased to look back at these results and note that, with the exception of Black Diamond, all of my fastest efforts came _after_ my recovery. Mission accomplished! The main benefit of the challenge for me, besides staying fit, was variety. I routinely run in Trumansburg and at Taughannock. The challenge forced me out of my comfort zone and onto some routes that I've only raced on in large groups, or have never been to at all. I covered 404.1 miles (12th place in the mileage competition) over the {{ challenge.length }} efforts I put in. Overall, I ran 914 miles in 2021, so just less than half were on challenge courses. Not bad for a Trumansburg resident!

I'm looking forward to future editions of the FLRC Challenge. This inaugural challenge was one I'll remember forever!

## FLRC Challenge, Visualized

This chart does a good job visually summarizing a few things. First, our focus on long weekend runs early on in the year. Second, the big pause in the middle for surgery and recovery. And lastly, our big summer push to get all the courses done, and then have fun the balance of the year trying to improve our speed and effort counts.

<div id="container"></div>

## In Pictures

Most pictures are at the start/finish signs, where you scan a QR code to mark your effort. Some show off the beauty of the area, too!

{% lightbox [
  { caption: "", image: "/images/2021/challenge/IMG_0123.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_0751.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_0761.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_0787.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_0795.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_0867.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_1271.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_1283.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_1324.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_1334.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_1370.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_1401.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_1403.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_1406.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_1455.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_1474.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_1475.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_1570.jpg" },
  { caption: "", image: "/images/2021/challenge/IMG_8375.jpg" }
]%}

## Course Commentary

{%- for course in courses -%}

<h3>{{ course.name }} ({{course.distance}})</h3>
<p>{{ course.description | safe }}</p>
<ul>
{%- for effort in challenge -%}
{% if effort.course === course.name %}
<li><b>{{effort.date}}</b>: {% if course.fastestStrava and effort.time === course.fastestTime %}<a href="https://www.strava.com/activities/{{course.fastestStrava}}">{{effort.time}}</a>{% else %}{{effort.time}}{% endif %} {% if effort.time === course.fastestTime %}<i class="fas fa-star" style="color: #ff9a00" title="Fastest time for this course"></i> ({{course.fastestPlace}}){% endif %}</li>
{% else %}{% endif %}
{%- endfor -%}
</ul>
{%- endfor -%}

<script>
Highcharts.chart('container', {
    chart: {
        type: 'column',
        height: 150,
        spacing: [0,0,10,0],
    },
    title: {
        text: null
    },
    xAxis: {
        type: 'datetime',
        labels: {
            format: '{value: %b %e}'
        },
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.category: %B %e}: {point.time}'
    },
    credits: {
        enabled: false
    },
    yAxis: {
        visible: false
    },
    legend: {
        enabled: true
    },
    colors: ["#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600", "#000000", "#999"],
    series: [
      {%- for course in courses -%}
      {
        name: '{{ course.name }}',
        data: [
{%- for effort in challenge -%}
{%- if effort.course === course.name -%}
  {
    x : {{ effort.date | momentUnix }},
    y : 1,
    time: "{{ effort.time }}"
  }
{%- if not loop.last %},{%- else -%}{%- endif -%}
{%- else -%}{%- endif -%}
{%- endfor -%}
]
    }
    {% if not loop.last %},{% else %}{% endif %}
    {%- endfor -%}
    ]
});
</script>
