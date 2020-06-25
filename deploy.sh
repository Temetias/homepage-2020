#!/bin/bash
echo "Deploying to Temetias.github.io..."
git clone https://github.com/Temetias/Temetias.github.io.git tmp
npm run generate
mkdir tmp2
mv tmp/.git/ tmp2/
mv tmp/CNAME tmp2/
mv __sapper__/export/* tmp2/
cd tmp2/
git add .
git commit -m "autodeploy"
git push && cd .. && rm -rf tmp/ tmp2/