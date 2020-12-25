---
title: "Christmas Half Marathon: 13.1 Miles of Holiday Cheer"
date: "2020-12-25"
permalink: "training-christmas-half-marathon-2020/"
hero: "/images/2020/12/christmas-half-marathon.jpg"
description: "I've used the Run Less, Run Faster half marathon plans before, so when I calculated out where a 16-week plan would land, it put me squarely at the end of Christmas week."
tags:
    - christmas
    - half marathon
    - training
---

After [taking a week off after my 13-week Memorial Day to Labor Day sprint](/we-interrupt-your-normally-scheduled-programming/), my body was calling for me to do something new. Without a race on the horizon due to the pandemic, I figured I'd jump into a plan and see what materialized. I've used the [Run Less, Run Faster](https://www.amazon.com/Runners-World-Less-Faster-Revolutionary/dp/159486649X) half marathon plans before, so when I calculated out where a 16-week plan would land, it put me squarely at the end of Christmas week. So, I plan to give myself an awesome gift at the end of the plan: a (hopefully) fast half marathon on a homemade course of my choosing!

I'm going to keep track of my workouts week-by-week below. There are three hard runs per week (that's the "run less" part of this plan). It'll be a fun way to look back and see how I was feeling during this tough, yet effective, plan. I'm not going to log my 4x weekly rowing sessions, or walks and hikes. I _will_ log things that get my heart rate going or really put a stress on my muscles.

I ran <b>{{hmTraining | totalRunMiles}}</b> miles over <b>{{hmTraining | totalRunMinutes | mmToHHMM}}</b> (hh:mm) in pursuit of this goal. On December 25, 2020, I nailed it.

{% set weekArray = hmTraining | getWeekArrayFor2020HMP | reverse %}
{%- for week in weekArray -%}

<h3 class="trainingTitle"><label for="switch{{week}}">Week {{week}}</label></h3>
<div class="trainingToggle">
    <input type="checkbox" class="trainingSwitch switch" id="switch{{week}}" {%- if week == weekArray.length -%} checked{%- endif -%} />
    <label for="switch{{week}}">Toggle</label>
    <table class="trainingTable">
    {%- for training in hmTraining -%}
        {%- if training.date | weekNumberFor2020HMP == week and training.type != "Wrap" -%}
        <tr class="workout workout{{training.type}}">
          <td>
            <div class="trainingTypeIcon trainingTypeIcon{{training.type}}" title="{{training.type}}">
                {%- if training.type == "Run" -%}<i class="fas fa-running"></i>{%- endif -%}
                {%- if training.type == "Ride" -%}<i class="fas fa-biking"></i>{%- endif -%}
                {%- if training.type == "Weight" -%}<i class="fas fa-dumbbell"></i>{%- endif -%}
                {%- if training.type == "Combat" -%}<i class="fas fa-fist-raised"></i>{%- endif -%}
            </div>
            <div class="trainingDate">
                <div class="mon">{{training.date | momentMonth}}</div>
                <div class="day">{{training.date | momentDay}}</div>
            </div>
          </td>
          <td>
            <b>{{training.title}}</b>
            <p>{{training.description}}</p>
          </td>
          <td class="metrics">
            {%- if training.miles > 0 -%}<b>{{training.miles}}</b> mi<br />{%- endif -%}
            <i class="far fa-clock"></i> {{training.minutes | mmToHHMM}}
            <a href="https://www.strava.com/activities/{{ training.strava }}/overview" target=_blank title="View on Strava"><i class="fas fa-external-link-alt"></i></a>
          </td>
        </tr>
        {%- endif -%}
        {%- if training.date | weekNumberFor2020HMP == week and training.type == "Wrap" -%}
        <tr class="workoutWrap">
          <td colspan="3">
            <b>Week {{week}} Recap:</b> {{training.description}}
          </td>
        </tr>
        {%- endif -%}
    {%- endfor -%}
    </table>
</div>
{%- endfor -%}