---
title: Managing event handlers in classes
slug: managing-event-handlers-in-classes
date: 2020-07-12
author: Teemu Karppinen
authorImg: /me2.jpg
authorLink: https://teemukarppinen.dev
---

If you've worked with TypeScript you might've noticed that many of library authors have a weird obsession of writing libraries as classes. Or even worse, write class wrappers around already nice, clean, functional API's just for the sake of that "being the TypeScript" way of doing things. Don't get me wrong: I'm not saying the libraries are necessarily bad or shouldn't be used. There is just some painpoints that pop up with the OOP approach. Especially when we're talking about an event-driven language like JavaScript.

## The Problem

Lately I've been working on a feature which needs A LOT of event handlers. I'm not going into specifics because it's work stuff, but essentially I have to:

- Create a lot of class instances
- Bind methods of those class instances to different events
- Handle the unbinding of those events in the end of the class instances' lifecycle

The class instances are vue-class-components, but that's trivial to the actual problem. Just anything with a lifecycle applies here. The problem arises when you want to bind and unbind class methods while retaining the correct ```this``` context.
