---
title: Managing Event Handlers In Classes
slug: managing-event-handlers-in-classes
date: 2020-07-12
author: Teemu Karppinen
authorImg: /me2.jpg
authorLink: https://teemukarppinen.dev
---

If you've worked with TypeScript, you might've noticed that many of library authors have a weird obsession of writing libraries as classes. Or even worse, write class wrappers around already nice, clean, functional API's just for the sake of that "being the TypeScript way of doing things". Don't get me wrong: I'm not saying the libraries are necessarily bad or shouldn't be used. There are just some pain points that pop up with the OOP approach. Especially when we're talking about an event-driven language like JavaScript.

## The Problem 😬

Lately I've been working on a feature which needs A LOT of event handlers. I'm not going into specifics because it's work stuff, but essentially I have to:

- Create a lot of class instances
- Attach methods of those class instances to different events
- Handle the detaching of those events in the end of the class instances' lifecycle

The class instances are [vue-class-components](https://class-component.vuejs.org/), but that's trivial to the actual problem. Just any class API where we might need to attach and detach methods to events applies here. The problem arises when you want to attach and detach class methods while retaining the correct ```this``` context.

Let's think about this scenario:

You have some library with events, for example some sort of map library. You want to attach a method of the class to the event, and detach it later. Easy, right?

![alt text](/badbind.PNG "This will lose THIS")

You wish! You see, this approach will make the ```mouseDownHandler``` lose ```this``` context, and be unable to refer to the value it wants to. So in this case, the ```console.log``` doesn't print ```"Hey"``` but instead we get greeted with the good ol' ```undefined```.

## The Ugly Solution 🤮

Okay then, let's bind the function. But then that needs to happen inside the lifecycle. And don't forget, we want to refer that bound function later to detach it! So we can't just go ```map.mouseDown.on(this.mouseDownHandler.bind(this))``` because [Function.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) creates a new function and that's the function we want to be .offing later.

So what we need to do is to have a separate variable for the function and alter that one. Something like this:

![alt text](/uglybind.PNG "Works, but is ugly")

This works but as you can see it's not the most readable approach and gets very boilerplatey fast. And you also need to come up with a new name for the unbound funtion. I've seen some use underscore prefixes like ```_handleMouseDown``` but that already is kind of reserved for indicating the intentional hiding of implementation details.

Also, as we can see, this doesn't scale that nicely...
![alt text](/ugliestbind.PNG "Works, but there is soo much code")

## The (less) Ugly Solutions 😪

Well, the other day it kind of hit me. Instead of focusing too much on the methods, renaming, binding and all that mess, what if we just used some sort of "cleanup callback array"? I tried it and in my opinion this is the least ugly solution to this problem.

Check this out:
![alt text](/prettybind.PNG "Works, and is much cleaner to look at")

We introduce a new array ```cleanUps``` and we do all the bind, .on and .off handling in the mounted hook. The overall lines of code doesn't really change but that's not the point. In my opinion there is still benefits with this approach:

- Less weird name suffixes like ```Unbound```
- The logic is in one place
- More flexible approach. The cleanUps can be used for other things and from other methods.

You could also consider implementing a utility function if you find yourself doind a lot of attaching. Something like this:
![alt text](/fancybind.PNG "Everything is nicer when you use a function")

Utility functions... Can't have enough of those, right? 😅

## To Close Things Up 

What I showed here is not necessarily the golden solution you were looking for. But it is, in my opinion, a decent workaround to an annoying problem. Overall, all this would've been avoided by not using class based API in the first place and avoiding the use of ```this``` altogether. But we don't always have the benefit of choosing the libraries we work with. It's situations like these, when workarounds like this are valuable.

