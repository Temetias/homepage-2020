---
title: The New Website
slug: new-website
date: 2020-06-24
---

# The New Website 🌍

During my summer holidays I finally decided to improve my personal website. I had a site already but it was made back when I was just starting in webdev and, well, it shows.

The old site lacked quite a lot not only in the responsiviness department, but also in accessibility. There's barely any semantic on it and the load times overall are not really great for a page with no images, no real need for javascript and so on.

*My old website*
![alt text](/old-website.PNG "My old Nuxt.js website")

## Tech Choices 🔨

The old site was made with [Nuxt.js](https://nuxtjs.org/). Looking back, that site could've (and should've) been just a static HTML page. Inspired by the idea of just going raw HTML, that's what I initially started with.

The further I got, the more tedious that approach became. I had already decided that I would do a multi-page site and also wanted to implement this blog. The lack of style scoping and the lack of component reuseability quickly became a burden.

So I started spinning the wheel of frameworks once again! This time I wanted something more minimal though. I found [Sapper](https://sapper.svelte.dev/) which seemed way more appealing for this usecase than the alternatives:

- It's super lightweight 
- It's easy to get started
- Svelte as a framework has close to zero boilerplate

Don't get me wrong: I have nothing against Nuxt.js, Next.js, Gatsby and so on. I think they're great but for this kind of lightweight website+blog
project, sapper seemed like it had the best toolkit. Although [Gatsby](https://www.gatsbyjs.org/) with [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) was super tempting, doing an almost fully static page with React or Vue just seemed like a bit of an overkill.

Working with Svelte and Sapper was super nice. The initial boilerplate they give you has an amazing focus on semantic and accessibility, the dev server is super fast and overall the best parts of the framework shine in a usecase like this.

## Visual Progress 💅

I decided to go for a minimal look in the hopes of rapid development and small bundle sizes. Overall I think the design turned out nice enough. The only "gimmick" I made was the landing figure styling. I wanted to sprinkle in a little bit of that [skeuomorphic design](https://uxstudioteam.com/ux-blog/ui-trends-2019/#10Skeuomorphic_design) double shadow goodness.

To achieve the nice effect of having a light source on the top left you need to cast a shadow on the bottom right and make a white shadow on the opposite side. To make the white appear at all I needed the background to be a bit darker. Also, I quickly realized that having just a solid red border completely wrecks the whole illusion.

*Not good* 🤮
![alt-text](/figure-bad.PNG "Red border ruins the illusion")

To achieve the wanted effect, the border needed a gradient. Well, that isn't really a thing so I ended up doing a ball shape behind the image and placing the image on top of it. The tricky part was to make them properly responsive. Luckily, responsive square and circle shapes are easy enough to achieve with the ol' `padding-bottom: 100%;` trick. Some absolute positioning on the image, and voilà!

*The circle shape for the gradient*
![alt-text](/figure-bg.PNG "The circle shape for the gradient")

*Final result* 🎉
![alt-text](/figure.PNG "Final result")

Having wrestled with that problem for longer than I want to admit, I decided that this was it for the gimmicks. Rest of the design is kind of self-explanatory: Black on white, some red highlights and that's it.

## The Blog 📰

Implementing the blog was the only real technical problem I had to solve. Blogs are a thing that have been solved like a million times already, but hey, we're all out here learning. I wanted to solve this at least mostly by myself.

I decided to go with markdown, so I could easily write blog posts and just drop them in the repo with Github. This initial version uses similar approach that the Sapper template already came with. The `_posts.js` file bundles the .md files together and we use the `[slug].svelte` file to dynamically populate it with a plog post.

The images I serve from Sappers static folder, but there's also the option to just link them from a 3rd party site.

The pain point currently is the bundling of the markdown files:

*Bundling the markdown*
![alt-text](/bundling.PNG "Bundling the markdown files")

As you can see, all new blogposts currently require a new entry on the file. I tried experimenting with having the metadata in the .md itself and using the [marked-metadata](https://github.com/jaydson/marked-metadata) library instead of just [marked](https://github.com/markedjs/marked) on webpack level. That part worked fine, but the issue I had was with collecting the markdown. I tried importing all the files from the folder, something like `import posts from "../blog_content/*.md"` but for some reason I couldn't get the [webpack-glob-entry](https://www.npmjs.com/package/webpack-glob-entry) to play nicely at all.

In the end I decided to ditch the wildcard import and webpack level .md parsing, and do it on the bundling part. This allowed me some more freedom with parsing the posts and getting some additional data from them. For example, I can now determine the estimated read time for the post! The end result is still far from perfect, but at least now the metadata comes from the .md file, and there is only two lines to add to `_posts.js` when adding new posts.

*Bundling the markdown but with less manual labor*
![alt-text](/bundling-better.PNG "Bundling the markdown files")

In the hopes of actually finishing the site during my holiday, I left the blog post part as is for now. But I'm most certainly coming back to the subject. Expect a new blog post soon!


