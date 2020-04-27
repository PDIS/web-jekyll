serve ::
	git submodule sync
	git submodule update
	bundle exec jekyll serve

test:
	bundle exec jekyll serve --draft
