#!/bin/bash
echo "Deploying to Temetias.github.io..."
git clone https://github.com/Temetias/Temetias.github.io.git tmp
npm run generate
mkdir tmp2
mv tmp/* tmp2/
mv __sapper__/export/* tmp/
mv tmp2/* tmp/ 2>/dev/null
cd tmp/
git add .
git commit -m "autodeploy"
git push && cd .. && rm -rf tmp/ tmp2/