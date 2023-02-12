---
title: "How to Automatically Create Google Calendar Events from a Google Sheet"
date: "2023-02-12"
permalink: "how-to-automatically-create-google-calendar-events-from-google-sheet/"
hero: "/images/develop/sheets-calendar/harvest_moon.jpg"
description: "If you need to automatically create Google Calendar events from data in a Google Sheet, this pared down example should work well for you."
tags:
  - google sheets
  - google calendar
---

I'm writing this up after doing a more complex integration of a Google Sheet with Google Calendar. My wife's bakery has an online order form that submits to a Google Sheet. From there, I needed a way to get the orders into her Google Calendar without manual intervention. If you need to automatically create Google Calendar events from data in a Google Sheet, this pared down example should work well for you.

## Data in Google Sheets

Start in your Google Sheet, which may be something you created, or may be something that sources its data from a Google Form. For this example, I created a [static spreadsheet](https://docs.google.com/spreadsheets/d/1oUljByyOCIujLQN09VKPQ8_AMXOMuJzfdTRbw7Tt5Os/edit?usp=sharing) of the [names of full moons in 2023](https://www.space.com/39238-full-moon-names.html).

## Open Apps Script

Choose **Extensions > Apps Script**. This opens a new tab to the scripts that are connected to this Google Sheet. Go ahead and name your project at the top of the scripts page.

{% picture "/images/develop/sheets-calendar/google-sheet.png", "" %}

## Open the Google Calendar

Navigate to the Google Calendar you want to add these events to. Find the ID of the calendar:

1. Click the 3 dots next to calendar name on the left
1. Select **Settings and sharing**
1. Copy the Calendar ID at the bottom under the **Integrate Calendar** section. This may look like your gmail.com email address if it's your primary calendar, or something more like randomcharacters@group.calendar.google.com if it's a separate calendar you created.

## Update the Script

I have a bit of code you can use to get started here. The variables are all at the top, so you can customize them for your use.

1. **calendarId** - The calendar ID you got from the prior section.
1. **uniqueEventSuffix** - A unique string we'll use to help with making updates.
1. **dataRange** - The range of data to import into the script (should include all of the columns you need)

A note about the suffix: be careful if you’re working in a calendar with other events in it. The suffix is used as a qualifier for deletion, so choose something that's bound to be unique from anything you'd manually put into your calendar.

{% githubGist "f5c0bcbb6896af5b7f5f0fafca9ab70f" %}

So, what's going on here?

The core function is **addEventsToCalendar**. It gets the event data from the spreadsheet, ignoring any empty rows. Then, it deletes any events created on prior executions. This step is crucial, because otherwise you'd duplicate events (see the section on editing events below). Then, for each event, it grabs the date, title, and description, and creates an event.

## Run the Script

Let's give it a try. Click the **Save** icon in toolbar, select **addEventsToCalendar**, and then click **Run**. Since this is the first time you're running a script connected to the sheet, you'll need to get some permissions set.

First, click Review Permissions.

{% picture "/images/develop/sheets-calendar/authorization-required.png", "" %}

On this imposing dialog, click the link "Go to your project name (unsafe)". It's okay, 'cause you're the developer!

{% picture "/images/develop/sheets-calendar/google-hasnt-verified.png", "" %}

Lastly, allow access. Now the script can run.

{% picture "/images/develop/sheets-calendar/allow-access.png", "" %}

You should see some console output for each event that's processed.

## Check the Results in Google Calendar

Let's head over to Google Calendar and see if we can find the events that were created.

{% picture "/images/develop/sheets-calendar/calendar-event.png", "" %}

Yes! First, we found a single event. We can search for MOONCAL and find all of the events that were created, too.

{% picture "/images/develop/sheets-calendar/all-calendar-events.png", "" %}

## Running the Script Automatically

One-time use is cool enough, but you probably want this script to run automatically. For my wife's bakery, we set it to run periodically, reflecting updates that she makes in the spreadsheet throughout the day. Her script is a lot more sophisticated: rows are only turned into events if she accepts the order, so there's a column that we use to indicate an order is accepted. You can do anything in the script, so make it your own!

Visit Triggers and "Add Trigger" from the Apps Script page. The screenshot below shows an option for setting up an interval-based trigger. You can also trigger from spreadsheet or calendar changes, but be careful of race conditions. The script can execute concurrently, and that can result in some nasty race conditions. So, I prefer interval-based execution.

{% picture "/images/develop/sheets-calendar/trigger-menu.png", "" %}

## Updating Events

You can change the dates, the description, or other details in your spreadsheet, and those should be reflected in the calendar. How can we accomplish this?

I originally wrote calendar event IDs back to the Google Sheet, and used them to find and update the events if they existed, or create new events if they did not. However, I found that to be too error-prone and unreliable. Not sure why, but sometimes Google couldn't find an event that already existed, resulting in a ton of duplicated events. If you're interested in the code snippets to do this, I included them below (you'll need to slot them into the appropriate spots in your code). Again, don't recommend this, but if you need a variation on the theme for your use case, it's here for you.

I ended up with the approach above, where all events are deleted and re-created on each run of the script. I found to this to be the least error-prone. To prevent too much script execution time, I also only delete events and write new events that occur in the future. Unless you need to refer back to older events in your calendar, this can be pretty efficient. After all, you still have all the data for past events in the spreadsheet.

{% githubGist "2d80af45f18118477e413a70504d6f04" %}
