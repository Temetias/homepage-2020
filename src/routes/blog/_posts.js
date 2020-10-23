import grayMatter from "gray-matter";
import marked from "marked";

// Import new stuff here!
import tricksAndGotchas from "../../blog_content/js-ts-tricks-and-gotchas.md";
import iterativeVue from "../../blog_content/iterative-adoption-of-a-framework.md";
import managingOop from "../../blog_content/managing-event-handlers-in-classes.md";
import newWebsite from "../../blog_content/new-website.md";

const AVERAGE_WPM = 256;

function getReadTime(md) {
  return Math.round(md.split(" ").length / AVERAGE_WPM);
}

function buildPost(post) {
  const { data, content } = grayMatter(post);
  return {
    ...data,
    content: marked(content),
    readTime: getReadTime(content),
  }
}

// Drop new stuff here!
const posts = [
  tricksAndGotchas,
  iterativeVue,
  managingOop,
  newWebsite,
].map(buildPost);

export default posts;
