---
title: Javascript/Typescript tricks and gotchas
slug: js-ts-tricks-and-gotchas
date: 2020-10-23
author: Teemu Karppinen
authorImg: /me2.jpg
authorLink: https://teemukarppinen.dev
---

Ok, so this is going to be a quicker and lighter one. I bundled a random mess of tricks and gotchas you might find useful when writing Javascript and Typescript! We all like our code clean and bug-free, and hopefully some of these tricks help you next time you're hammering code.

## TRICK - Assigning class properties in constructors 🤩

A nice one for you OOP fans out there. You know the annoying part of assigning the stuff from constructor to the this context? You know, all this nonsense:
![alt text](/class-bad.PNG "So much boilerplate!")

Well, there's actually no need for all that. You can do this instead:
![alt text](/class-good.PNG "Neat, readable, compact. 😍")

## GOTCHA - Class method binding 🤮

I've ranted about this [before](/managing-event-handlers-in-classes): When assigning class methods as callbacks for example into events, they tend to lose their *this*-context. So, remember to either make a new arrow function callback, or bind the function.

![alt text](/wroom.PNG "This context is gimmicky (and bug inviting!). Beware of (and avoid) it.")

## TRICK - Spreading and destructuring everything 🤩

Destructuring is one of my favourite features in Javascript. It allows you to reduce your LoC by a lot sometimes and overall results in compact and clean code. A common misconception is that it only works with objects but it also works for arrays too! I've bundled some examples underneath.

![alt text](/spread.PNG "Some examples of the power of spread and destructuring. Be careful not to overdo it!")

## GOTCHA - Spread ordering 🤮

Now that we are talking about spreading objects, be careful with the ordering. If you add a key to an object, the spread does in fact override the key! I have to admit, this bit me a couple of times before I started to get into habit of *always spread last*.

![alt text](/sad-toyota.PNG "Spread can bite you, be careful with the ordering!")

## TRICK - Currying / Partial application 🤩

This is not only a JavaScript/TypeScript trick but more of a general functional programming concept. Sometimes you might want to make your function take its arguments one by one and return a new function between, instead of passing all of them at once. What this achieves is a specialization of the same functionality. The motivation behind this is to avoid duplicating code and reaching more readable end result.

Let's see an example:
![alt text](/curry.PNG "Simplest example of currying")

What happens here? "isIn" is a function which returns a function which returns a computation of some sort. What we achieve here is a specialization of the "complex computation" without actually replicating the computation elsewhere in your codebase. This results in more maintainable code without less factors when refactoring. Also, it kind of reads like normal text, doesn't it?

To more effectively utilize this in TypeScript, I've learned that splitting your types based on the provided functionality achieves a very nice typesystem that supports currying. The types for the example above might look something like this:
![alt text](/curry-ts.PNG "Simplest example of currying in TS")

More stuff about currying and functional JS/TS in general can be found in [Kyle Simpsons "Functional Light JavaScript"](https://github.com/getify/Functional-Light-JS). Strong recommendation for the [video course in Frontend Masters](https://frontendmasters.com/courses/functional-javascript-v3/). Hands down one of the best online courses I've ever watched.

## TRICK - Ninja boolean conversions 🤩

This one is simple: You know how we often flip something to falsy with "!" operator. Well, you can chain two of them to flip to truthy. Very useful for filtering out falsy values from an array for example.
![alt text](/bangbang.PNG "BANG BANG!")
Be careful tho. The normal JS falsy lookup gimmicks apply here. "" is false and so on...

## GOTCHA - Object evaluation when logging 🤮

This one is especially tricky for beginners. If you enjoy ```console.log``` debugging like so many of us, beware of this one. Objects work a bit differently when console.logging them. Especially on Chrome, the object tends to get evaluated when you actually see the log in the console, not when the script actually runs the console.log. This is hard to explain in image form like the other, but beware when you see the little "i" icon next to your object. It means the object was "evaluated just now". This means the state of the object might be totally different to what you're actually expecting.

Firefox, my personal daily driver, seems to be much more predictable with this behaviour. But I remember this biting me many times back when I was still using Chrome and just learning JavaScript.

![alt text](/evaluated.PNG "This object was evaluted in the time of printing, not when console log was called!")
Beware of the icon next to the object.

## TRICK - Forcing object evaluating when logging 🤩

...But there's a way around this! You can do the goodol' JSON.stringify JSON.parse to get around this. This kills all the references of the object and also removes a lot of the prototype -stuff that's not usually wanted when logging. This is, of course, a very brute force-y approach but can provide useful when you want to do some sanity checks. But let's face it: When debugging you often might wanna check for such things. 😅


---

## Outro

That's it. A couple of useful and not so useful nuggets of knowledge. Hopefully this helps you dodge a bug or clean up a expression or two. Happy hacking! 😊