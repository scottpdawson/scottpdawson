---
title: "Building a Custom Cake Order Form with React"
date: "2019-12-29"
permalink: "building-a-custom-cake-order-form-with-react/"
hero: "/images/2019/12/final_cake_order_form.png"
description: "I started programming in React when we adopted a React-based framework at my day job earlier this year. My wife's bakery needed to have a better order form. I reasoned that I could take her Google Form and improve the experience."
tags:
    - react
    - emoticakes
    - featured
---

I started programming in React when we adopted a React-based framework at my day job earlier this year. At the same time, my wife's bakery needed to have a better order form. I reasoned that I could take her Google Form and improve the experience, all while lending more transparency to the options and pricing that she shared with clients placing an order. As you'll see in the progression below, I started with functionality, layering design and interactivity into the project once the core logic was done.

## 1: Cupcake Size and Quantity

The project started as a way to create an order for cupcakes. I chose to use a single component for the project with a state object to keep track of the user's order. ([github commit](https://github.com/scottpdawson/cupcake-configurator/commit/13eaa926e9e067ecf43a78f65169f572f1b069d7))

https://vimeo.com/381785984

## 2: Cupcake Flavors

This update added the ability to choose a cake flavor to associate with an order item. I misspoke in the video below: I'm not using Redux here, rather, a single-component state. ([github commit](https://github.com/scottpdawson/cupcake-configurator/commit/fd515655b2ca53462feb42280083aabea44d9969))

https://vimeo.com/381785993

## 3: Frosting Flavors

In addition to cake flavor, clients can choose up to 2 frosting flavors. We're starting to see some business rules in the logic here! ([github commit](https://github.com/scottpdawson/cupcake-configurator/commit/6113e1d0f43b4c02af7b1567756d5a8e041bd68b))

https://vimeo.com/381785998

## 4: Date Selection, Delivery Options

{% picture "/images/2019/12/cake_order_email.png", "" %}

Starting to build out additional options for the order form, refactored to use React Hooks to update the component's state. Also supported an up-charge for some combinations of cake and frosting. See? More business rules! I also incorporated email functionality using the free version of [emailjs](https://www.emailjs.com/), which worked like a charm. Here's a screen capture of the resulting email form submission. ([github commit](https://github.com/scottpdawson/cupcake-configurator/commit/d9a202e24b16e926394212d5984c186a8f00c45d))

https://vimeo.com/381786007

## 5: Adding the Design

A big update to the visuals, using CSS and some updates to add interactivity among the sections of the form. ([github commit](https://github.com/scottpdawson/cupcake-configurator/commit/eff925426238e381c64f572396df54d5793b78e3))

https://vimeo.com/381786026

## 6: Adding Cupcake and Frosting Imagery

I had a blast creating the variations of cupcakes and frostings using Affinity Designer. I used a single cupcake image and applied different adjustment layers to get the look I wanted. It took awhile, especially since I had a false start trying to use a single image and the CSS filter attribute, but that turned out to not give me the flexibility I needed for some of the coloring. ([github commit](https://github.com/scottpdawson/cupcake-configurator/commit/5a2e1d730fed8c3ff30588e4e8fe7eac4a24a495))

https://vimeo.com/381786038

## 7: Final ... Final Evolution

You know how when you think a project's done, you might learn that it's not? Well, that happened. My wife and kids started testing out the form, and a few things changed. First, I lost the yellow background. A white background made for a cleaner design, and I have to agree. Second, since Emoticakes also has cakes on offer, my wife asked if the form could handle that? Sure! I renamed it to be an "Order Quote" instead of a "Cupcake Quote" and was able to add the configuration options for cakes. All of my hard work to create cupcake images was not lost, either, since the frosting color was all I needed to show for cakes. So, I made an alternate presentation for that. As a last step, I added the ability to add a message to each item in the order. For cupcakes, this part is DOUBLY cool because you can see how the message aligns to the cupcakes in the box size you chose. No video for this last (last) evolution, but you can see the result in the image below. Of course, if you want to play with the final product, it's at [emoticakes.com](https://emoticakes-order.netlify.app/) _(please don't submit the form unless you actually want to place an order, okay?)_ ([github project](https://github.com/scottpdawson/cupcake-configurator))

{% picture "/images/2019/12/final_cake_order_form.png", "Cupcake lettering and the option to order cakes, too" %}

## 8: Next Steps

Oh, there's SO much more I could do with this! It's been a fun passion project, and yeah, I burned a few vacation days working on it over the holidays, but what a fun way to put my skills to use. Here's my punch list of tasks when if/when I make the time to get to it:

1. Continue to evolve the design and interactivity.
2. Refactor the code to make more reusable
3. Refactor the code to use Redux instead of a single component state (allow for component reuse and additional abstraction).
