.PHONY: deploy

deploy:
	git subtree push --prefix dist origin gh-pages

dev: 
	npx webpack-dev-server