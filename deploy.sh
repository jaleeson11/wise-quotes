# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# run git commands
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/jaleeson11/wise-quotes.git master:gh-pages

cd -