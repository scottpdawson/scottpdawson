---
title: "Race Schedule & Reports"
permalink: "race-schedule/"
author: "Scott Dawson"
---
{% set yearArray = collections.race | getYearArray %}

{%- for year in yearArray | reverse -%}
<h3>{{year}} Races & Reports</h3>
<table>
    <thead>
        <tr>
            <th>Date</th>
            <th>Race</th>
            <th>Distance</th>
            <th>Time</th>
            <th>Overall</th>
            <th>Age Group</th>
        </tr>
    </thead>
    <tbody>
        {%- for post in collections.race -%}
            {%- if post.date | momentYear == year -%}
                <tr>
                    <td>{{ post.date | momentDate }}</td>
                    <td><a href="{{ post.url }}">{{ post.data.title }}</a></td>
                    <td>{{ post.data.distance }}</td>
                    <td>{{ post.data.time }}</td>
                    <td>{{ post.data.overall }}</td>
                    <td>{{ post.data.agegroup }}</td>
                </tr>
            {%- endif -%}
        {%- endfor -%}
    </thead>
</table> 
{%- endfor -%}