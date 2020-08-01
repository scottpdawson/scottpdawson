---
title: "The Locker Prank"
date: "2020-04-28"
permalink: "the-locker-prank/"
hero: "/images/develop/lockers.jpg"
description: "When I read about this Popular Mechanics Riddle of the Week, I knew I could solve the problem by writing code. After all, I was a math minor in college, but my computer science degree wins out when I'm confronted with something like this."
tags:
    - typescript
    - math
---

When I read about this Popular Mechanics _Riddle of the Week_, I knew I could solve the problem by writing code. After all, I was a math minor in college, but my computer science degree wins out when I'm confronted with something like this. Brute force! Here's the riddle:

> There are 100 lockers that line the main hallway of Chelm High School. Every night, the school principal makes sure all the lockers are closed so that there will be an orderly start to the next day. One day, 100 mischievous students decide that they will play a prank. The students all meet before school starts and line up. The first student then walks down the hallway, and opens every locker. The next student follows by closing every other locker (starting at the second locker). Student 3 then goes to every third locker (starting with the third) and opens it if it’s closed, and closes it if it’s open. Student 4 follows by opening every fourth locker if it’s closed and closing it if it’s open. This goes on and on until Student 100 finally goes to the hundredth locker. When the principal arrives later in the morning, which lockers does she find open?
> 
> Popular Mechanics [Riddle of the Week](https://www.popularmechanics.com/science/math/a31153757/riddles-brain-teasers-logic-puzzles/)

The [mathematical solution published by Popular Mechanics](https://www.popularmechanics.com/science/math/a31155135/solution-riddle-locker-prank/) is far more elegant than my brute force approach. That said, I was able to come up with a way to visualize the changes as each student goes through the rows of lockers. Also, you can change the number of students and lockers to get quite the animation going!

<iframe height="600" width="100%" src="https://codepen.io/scottpdawson/embed/LYpyazV?height=600&amp;theme-id=light&amp;default-tab=result" allowfullscreen="true"></iframe>
