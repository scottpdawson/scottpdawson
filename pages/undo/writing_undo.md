---
title: "Undo"
permalink: "writing/undo/"
author: "Scott Dawson"
hero: "/images/writing/barn.jpg"
navigation: "Write"
usesCharts: true
description: "I'm on track to finish Undo, my fiction novel, by September 2021. I'm keeping track of my progress each week, since they've seemed to fly by since I started writing the second draft of the book on January 25, 2021."
---

I'm on track to finish **Undo**, my fiction novel, by September 2021.

> Corey lives in Morley, Oregon. His family is well known for winemaking and ranching in this rural Willamette Valley town. After tragedy strikes, he discovers a device that allows him to jump back in time. Will the power of undoing his actions get him what he wants? Or, does Corey learn there are some things you cannot fix?

I'm keeping track of my progress each week, since they've seemed to fly by since I started writing the second draft of the book on January 25, 2021.

<h2>Progress, Visualized</h2>

- On average, I've written **{{ writingRecap | averageWritingMinutes }}** words per session
- I've written **{{ (writingRecap | totalWritingMinutes).toLocaleString() }}** ({{ writingRecap | totalWritingMinutes | percentWritingMinutes(80000) }}%) of my planned **80,000** words

{% include "./writing_undo_chart.md" %}

<h2>Weekly Dispatches</h2>

{%- for recap in writingRecap | reverse -%}
    {%- if recap.title -%}
        <h3>{{recap.date | momentDate}}: {{recap.title}}</h3>
        <div class="writing_recap">{%- include "./writing_summaries/" + recap.date + ".md" -%}</div>
    {%- endif -%}
{%- endfor -%}

