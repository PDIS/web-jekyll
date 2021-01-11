git remote set-url origin https://$GITHUB_TOKEN@github.com/pdis/web-jekyll
git checkout master
grep -rnwE 'https?://talk' _i18n _posts | grep -oE "https://.*\.(jpe?g|png)" | sort | uniq | xargs wget -P assets/imgs/
git status | grep -E '\.jpe?g$' | awk '{print $1}' | xargs jpegoptim
git status | grep -E '\.png$' | awk '{print $1}' | xargs optipng
find _posts _i18n -name '*.md' -exec sed -ri 's/https?:\/\/talk.pdis.nat.gov.tw\/([a-zA-Z0-9_]+\/)+([0-9a-zA-Z_]+.(jpe?g|png))/\/assets\/imgs\/\2/g' {} +
find _posts _i18n -name '*.yml' -exec sed -ri 's/https?:\/\/talk.pdis.nat.gov.tw\/([a-zA-Z0-9_]+\/)+([0-9a-zA-Z_]+.(jpe?g|png))/\/assets\/imgs\/\2/g' {} +

if [ "$(git diff --exit-code)" ] || [ "$(git ls-files --others --exclude-standard)" ]; then
  git config --global user.email "archive-image@pdis.tw"
  git config --global user.name "archive-image"
  git add .
  cat <<EOF |
Auto archive image

Archive and Modify follow file:
$(git diff --staged --name-only)
EOF
  git commit -F -
else
  echo 'there is no changes.'
fi
