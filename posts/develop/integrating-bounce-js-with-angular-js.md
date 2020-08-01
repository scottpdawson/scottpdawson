---
title: "Integrating Bounce.js with Angular.js"
date: "2015-11-13"
permalink: "integrating-bounce-js-with-angular-js/"
hero: "/images/develop/bounce.jpg"
description: "My goal was to integrate bounce.js with Angular.js, in particular, with ng-show directives. Of course, 'integration' is a term open to interpretation."
tags:
    - bounce
    - angular
---

I have been posting links to things I find useful on Twitter, and one lately was [bounce.js](https://github.com/tictail/bounce.js). A follower challenged me to think about whether it could be integrated with [angular.js](https://angularjs.org/). I use Angular at my day job, but had not integrated an animation library with it. Of course, "integration" is a term open to interpretation.

{% tweet 664571808578867200 %}

So, my goal was to integrate bounce.js with Angular.js, in particular, with ng-show directives. When I want to show or hide an element in Angular, I use a Boolean scope variable or an expression in conjunction with ng-show or ng-hide. Rather than set this scope variable directly with ng-click (for instance, on the buttons in my example), I can instead call a function that applies the animation in _conjunction_ with this scope parameter change.

Showing is easy: set the scope variable to **true**, ensuring the element appears, and apply the bounce animation to the element. Hiding is more complex, and involves a jQuery promise (then) to get the scope and set the scope variable to **false**, just after the animation is completed.

<iframe height="300" width="100%" src="https://codepen.io/scottpdawson/embed/bVOVBO?height=600&amp;theme-id=light&amp;default-tab=result" allowfullscreen="true"></iframe>
