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

I'm keeping track of my progress each week. I wrote the second draft of the book between January 25 and July 9, 2021. I'm capturing the weekly progress of editing, proposing, and sharing below.

<h2>Progress, Visualized</h2>

- On average, I wrote **{{ writingRecap | averageWritingMinutes }}** words per session
- Between January and July, I wrote **{{ (writingRecap | totalWritingMinutes).toLocaleString() }}** ({{ writingRecap | totalWritingMinutes | percentWritingMinutes(80000) }}%) of the planned **80,000** words

{% include "./writing_undo_chart.md" %}

<h2>Editing & Marketing Dispatches</h2>

<h3>{{'2021-08-27' | momentDate}}: Next Week's the Week</h3>
<div class="writing_recap">{%- include "./writing_summaries/2021-08-27.md" -%}</div>

<h3>{{'2021-08-20' | momentDate}}: 500k</h3>
<div class="writing_recap">{%- include "./writing_summaries/2021-08-20.md" -%}</div>

<h3>{{'2021-08-13' | momentDate}}: Dog Days</h3>
<div class="writing_recap">{%- include "./writing_summaries/2021-08-13.md" -%}</div>

<h3>{{'2021-08-06' | momentDate}}: All That Summer Has to Offer</h3>
<div class="writing_recap">{%- include "./writing_summaries/2021-08-06.md" -%}</div>

<h3>{{'2021-07-30' | momentDate}}: Assuming the Role of the Reader</h3>
<div class="writing_recap">{%- include "./writing_summaries/2021-07-30.md" -%}</div>

<h3>{{'2021-07-23' | momentDate}}: Shifting Gears</h3>
<div class="writing_recap">{%- include "./writing_summaries/2021-07-23.md" -%}</div>

<h3>{{'2021-07-16' | momentDate}}: No More Counting</h3>
<div class="writing_recap">{%- include "./writing_summaries/2021-07-16.md" -%}</div>

<h2>Writing Dispatches</h2>

{%- for recap in writingRecap | reverse -%}
{%- if recap.title -%}

<h3>{{recap.date | momentDate}}: {{recap.title}}</h3><div class="writing_recap">{%- include "./writing_summaries/" + recap.date + ".md" -%}</div>
{%- endif -%}
{%- endfor -%}
