SRC = app.js routes/index.js public/js/main.js

CLIENT_JS = public/js/prism.js public/js/main.js
CSS = public/css/grid.css public/css/style.css public/css/normalize.css \
	public/css/prism-tomorrow.css

build:
	@$(MAKE) lint
	@node_modules/.bin/cssc $(CSS) > public/css/style.min.css
	@cat $(CLIENT_JS) > public/js/app.js
	@node_modules/.bin/uglifyjs public/js/app.js -o public/js/app.min.js \
	--stats

rebuild:
	@$(MAKE) clean
	@$(MAKE) build

lint: $(SRC)
	@node_modules/.bin/jshint $^

clean:
	@rm -f public/js/app.js
	@rm -f public/js/app.min.js
	@rm -f public/css/style.min.css
