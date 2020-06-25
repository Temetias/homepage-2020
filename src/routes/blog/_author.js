const DEFAULT_AUTHOR = "Teemu Karppinen";
const DEFAULT_AUTHOR_IMG = "/me2.jpg";
const DEFAULT_AUTHOR_LINK = "/";

export function getAuthor(post) {
  return post.author || DEFAULT_AUTHOR;
}

export function getAuthorImg(post) {
  return post.authorImg || DEFAULT_AUTHOR_IMG;
}

export function getAuthorLink(post) {
  return post.authorLink || DEFAULT_AUTHOR_LINK;
}
