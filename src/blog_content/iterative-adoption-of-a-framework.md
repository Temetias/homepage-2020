---
title: Iterative Adoption Of A Frontend Framework
slug: iterative-adoption-of-a-frontend-framework
date: 2020-08-09
author: Teemu Karppinen
authorImg: /me2.jpg
authorLink: https://teemukarppinen.dev
---

When starting a new frontend project in 2020 you're greeted with multiple nice tools and prebuilt configurations. Create-react-app, next.js, vue-cli, sapper... the list goes on. All of these tools provide brilliant DX and usually in the right hands yield an amazing end result. But what if we don't have the option to start from scratch?

## Enchancing an old frontend

Some frameworks advertise the ability to be iteratively adopted more than the other. One framework which usually pops up in these discussions is Vue.js. They claim to be "incrementally adoptable" which I personally can say is true, but there is suprisingly little material about the journeys of that incremental adoption online.

Vue.js docs guide you to just drop a script tag into your page, type ```new Vue({ ... })``` and start hacking. That'll get you started for sure, but for a larger scale you might want to know a little more than that. Let's say youre working in an environment where the backend has some say how it serves the front end code and you don't really have a complicated build phase for your frontend. Something like a typical Wordpress / Drupal site, with some js/css files sprinkled on top.

For example, single file components (SFC) are not really a thing without going through the hassle of setting up some sort of custom build phase with webpack. Also the magical part of your app just appering into the DOM you'll also have to manage by yourself. This isn't as hard as it sounds though.

## Serving and mounting

As previously said, Vue.js (and most other non-compiled frameworks) only require you to have the script loaded on the page. If you have any sort of library management already going on in your page, this is likely a non-issue. Just load the script before the rest of your code and that's it.

The next part is the mounting of the Vue.js component / app. This is where you'll have to consider some variables. Usually the smartest move is to pick a separated functionality from the rest of your app. Say a data-panel, a navigation element, or something along those lines. The main thing you want to avoid is excessive communication between your existing frontend and your new Vue.js component. That is also completely possible, but it can get messy real fast.

The actual mounting is super easy, Vue.js provides a ```$mount``` -function, which can target any element from the DOM. You can think it kind of like jQuerys ```.appendTo```. In the react world the same functionality is achieved with ```ReactDOM.render```. The cool part about Vue.js' ```$mount``` is that you can omit the element from the function which starts the vue instance without visually mounting it, and you can just access the vue element with ```$el``` and mount it when you're ready. This can prove useful sometimes.

## Templating

Without single file components, you're most likely left wondering: "What about my templates?". Well, in react you'll want to use JSX / TSX but that'll require you to compile that down to plain js. In Vue.js you'll have the ```template``` property, which allows you to just use a html as a string as the template of the element! This sound a bit sketchy, but it works super nicely.

My personal preferred way is to use template literals. This allows for some funky little tricks that might not even be possible with SFC's like injecting variables like translated strings into the UI on the fly with ```${someVariable}``` -syntax without even passing it to the vue's vm! You can even have some syntax highlighting on your templates with vs-code extension comment-tagged-templates.

I've also seen setups where people generate templates with PHP on the backend, inline that generated template into the js script and pass that into the vue instance. I can't really comment on that approach without trying it myself but I can see the template in the PHP side looking a bit wild with all the vue syntax sprinkeld in. But there's no doubt you can do some pretty powerful things like that.

## Styling

This is the not so pretty part in my opinion. Single file components and modern build tools provide amazing tools for scoping, themeing and for other style related stuff. But if you're doing iterative adoption you'll likely have to be still working with regular stylesheets. This is where you'll just have to figure out the best way for your specific stack yourself. The most efective way to style components from a global stylesheet for me has been using SASS with BEM, but your mileage may wary.

## First component / feature is shipped, now what?

Keep hammering! Add more elements to your page or start moving your existing root deeper in to the app. Adding more components to your page isn't something you'll have to worry about. I've seen people saying that multiple roots in a page is bad but actually there isn't that much to worry about. The recursive nature of the DOM means that most of the frontend frameworks are built so that nested components are basically just a new instance but with some optimisations. Sprinkling a lot of roots to your page is not necessarily that much of a perfomance hit in comparison. I've personally worked in a page where there is more than a 100 vue roots in the same page and it worked just fine.

There is also a suprising amount of ways to programatically communicate between outside and inside of the components and even between 2 different roots. If you feel like it, you can even throw in a store like Vuex and have multiple vue roots link to that.

Of course, if you have the possibility to just start moving the root of your framework deeper into the app and not create more roots, that's good. That'll save you the time of handling the complexity of creating and mounting multiple vue instances. Just go with whatever works for you, as long as you can get stuff done there and feel like you're moving towards an improved piece of software there is no "wrong ways" to go about iterative adoption!
