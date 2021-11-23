---
title: Short code is good code
slug: short-code-is-good-code
date: 2021-11-23
author: Teemu Karppinen
authorImg: /me2.jpg
authorLink: https://teemukarppinen.dev
---

(Good) software developers do their best to make their code as readable as possible for the next developer. Be it adding comments, making patterns declarative or simply just organizing their code cleanly, a good coder ensures their code is nice and tidy and doesn't make the next developer want to quit their job.

Due to this, there are a lot of guides and even books about the subject. Most of the authors usually inject their own approach to these practices and have their own approach to what is seen as "clean code". Lately I've been thinking about the subject a lot, and wanted to point out one thing that in my opinion doesn't pop often enough regarding clean code.

## Relation to spoken language

Back in my army days, our trainers often emphazised the importance of "varusmiesvarma puhe", which roughly translates to "fool-proof speech". One of the main points was that the wording you use should be straight to the point. Short, efficient and clear. Similar speech in my opinion is also valuable in professional life as well: "Straight to the point" avoids confusion and saves everyones precious time by keeping meetings short. Also it allows you to transmit more information within shorter period of time, which in my opinion in a professional setting is good.

Same goes for emails and written documents. For example, the best pieces of documentation out there, are usually the ones with least noise and unnecessary filler text. Documentation isn't something people usually go to read for the fun of reading. They have stuff to do, things to fix. They only care about finding what they need.

## /cry

At this stage you probably have an idea where I'm going with this: Short code is good.

When I hop into a codebase, I usually have actual things that I need to find. I shouldn't need to scroll through unnecessary duplicate blocks of code, just to find the bug in line 664. I don't want to find variables just to see that are only used once and didn't actually serve any purpose as a variable. I don't want to find unnecessary function declarations around functions that would've fit the event handler as is.

## Motivation

Why am I complaining about this? Because this effects me quite heavily. Some people are very good at reading code. They can eye through huge amounts of code fast and get a rough idea how it works. They can often hop into a codebase, ignore the parts that don't concern their current task in hand.

I'm not one of those people.

For me, reading code can sometimes be a challenge. I need to understand my surroundings in the file. I don't "browse" code, I read code. Thus, every line in the codebase slows me down. Reading "noisy" code is a bit like trying to listen to a podcast that keeps buffering every 5 seconds. I've chatted with other professionals in the field and I'm not alone in this.

Also there's a thing to be said about code being a substance that requires maintenance. The more code you have, the more stuff you have to maintain. You might think the small decicions you make along the way don't matter, but if all the code you write ends up being 2 times as long as it needs to be, you're essentially doubling the size of your codebase.

## Being explicit vs being implicit

Some clean code influencers seem to be very much in the favor of being explicit with your code. They often emphasize being "very clear about what you're doing". I've also seen some hot takes like "good code documents itself".

I strongly disagree with many of these statements.

If you're being explicit about everthing, nothing actually ends up being explicit. Your code will end up overly verbose and the actual meaning of your logic drowns in your implementation. It's much better to find the key points where you want to be explicit, and emphasize that. Rest of the implementation should be quiet, elegant, out of the way. Focus on being declarative, and there's nothing more declarative than your logic as pure as it can be.

Also the "self-documenting code" is in my opinion a weird approach to take. We have languages that are used for communication between humans, and languages for communication between human and the machine. Why would you use the latter for human to human communication, when all programming languages have a way to inject actual human to human conversation in them: Comments. This doesn't mean that your logic can be messy, I'm just saying that you shouldn't add extra verbosity to your code in exchange for avoiding comments.

Increasing the length of your variable names in hopes of improving it's descriptiviness is also a weird tradeoff in my opinion. If you think about variables and how you usually handle them: When you see a variable, you go see where it's declared and then start browsing the logic. Why would you invest unnecessary amount of characters into the variable name, when you can just place a comment where the variable is declared? And if the argument is "I don't wanna scroll all the way to where the variable is declared" then I'd say you have greater problems in the codebase.

## Examples

Underneath are some very naive examples of what I'm talking about.

```typescript
async function getCarsWithBrands() {
  const listOfCarsOfUnknownBrands = await getCarList();
  const listOfCarsWithBrands = listOfCarsOfUnknownBrands
    .map(carOfUnknownBrand => {
      const carWithBrandKnown = getCarBrand(carOfUnknownBrand);
      return carWithBrandKnown;
    });
  return listOfCarsWithBrands
}
```
Ok, so lets start breaking this down...

First of all, the name in line 2 is stupid. Why use something that long, when you can just use a comment? Imagine this logic being more complex and not just an arbitrary example. The code would look actually ridiculous.

Better:

```typescript
async function getCarsWithBrands() {
  const cars = await getCarList(); // Cars at this stage don't have brands.
  const listOfCarsWithBrands = cars.map(carOfUnknownBrand => {
    const carWithBrandKnown = getCarBrand(carOfUnknownBrand);
    return carWithBrandKnown;
  });
  return listOfCarsWithBrands
}
```

So much easier on the eye. Looks a bit less like a wall of text, more like a declaration of logic.

Although, I would argue that most of the variables are actually completely unnecessary. Why do we have variables in the first place? The serve no functional purpose whatsoever, they're noise.

Let's improve:

```typescript
async function getCarsWithBrands() {
  const listOfCarsWithBrands = (await getCarList()).map(carOfUnknownBrand => {
    const carWithBrandKnown = getCarBrand(carOfUnknownBrand);
    return carWithBrandKnown;
  });
  return listOfCarsWithBrands
}
```

We got rid of the variable. Without the variable we don't even have the problem of naming it. We can do better still:

```typescript
async function getCarsWithBrands() {
  return (await getCarList()).map(carOfUnknownBrand => {
    return getCarBrand(carOfUnknownBrand);
  });
}
```

Two more variables gone. We are getting to a stage where I personally can now quicly read it, and see what it is about.

We can do better still though, we have an unnecessary function declaration. This is getting a bit language specific. These things come down to just being good with the language you're using and are not necessarily "clean code" concepts.

```typescript
async function getCarsWithBrands() {
  return (await getCarList()).map(getCarBrand);
}
```

At this stage it's kind of questionable if this even needs it's own function. Of course you can blame it on my relatively obsolete example, but suprisingly often you can find situations like these if you're actively stripping out unnecessary verbosity.

## End notes

Please don't try to find some golden bullet for clean code here. Often the most frustrating code to read is when people have found their new golden bullet and overuse it everywhere. What I hope you take out from this is that think about the decicions you're taking when writing code. More text doesn't equal better readability. Often it's the exact opposite. Make your logic approachable by focusing on the logic and not hiding you logic behind some magical clean code guidelines.

Think of us slow readers. 🙏