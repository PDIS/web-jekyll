#!/bin/bash

git remote set-url origin https://$GITHUB_TOKEN@github.com/pdis/web-jekyll
git checkout master
npm install
node build/articles_translate.js

if [ "$(git diff --exit-code)" ] || [ "$(git ls-files --others --exclude-standard)" ]; then
  git config --global user.email "auto_translate@pdis.tw"
  git config --global user.name "auto_translate"
  git add .
  cat <<EOF |
Auto translate

Generate follow file:
$(git diff --staged --name-only)
EOF
  git commit -F -
else
  echo 'there is no changes.'
fi
