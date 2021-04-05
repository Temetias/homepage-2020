import * as sapper from '@sapper/app';

function parseNavigator(navigator) {
  const bundle = {};
  for (const prop in navigator) {
    if (typeof navigator[prop] === "string" || typeof navigator[prop] === "number") {
      bundle[prop] = navigator[prop];
    }
  }
  return bundle;
}

sapper.start({
  target: document.querySelector('#sapper')
}).then(() => {
  fetch("https://api.teemukarppinen.dev/laskenta/tapahtuma", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parseNavigator(window.navigator)),
  })
    .then(response => response.text().then(rawId => {
      const id = rawId.substring(1, rawId.length - 1);
      setInterval(() => {
        fetch(`https://api.teemukarppinen.dev/laskenta/ping?id=${id}&time=${performance.now()}`)
          .catch(console.error);
      }, 2000);
    }))
    .catch(console.error)
});