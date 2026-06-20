# Mesra Alam Sekitar — local preview dependencies
#
# We use a modern Jekyll (4.x) for local preview because it runs on current
# Ruby. The older `github-pages` gem is pinned to a 2019-era Jekyll that
# can't run on Ruby 3.4+/4.0 (it calls the removed `tainted?` method).
# This site uses only core Jekyll features (layouts, posts, permalinks),
# so the rendered preview matches what GitHub Pages publishes.
source "https://rubygems.org"

gem "jekyll", "~> 4.3"

# SEO: auto-generate sitemap.xml and an Atom feed (/feed.xml). Listed here so
# local preview matches the live GitHub Pages build (both plugins are
# supported by GitHub Pages natively).
gem "jekyll-sitemap"
gem "jekyll-feed"

# Ruby 3.0+ removed webrick from the standard library; Jekyll's local
# server needs it to start.
gem "webrick"

# Ruby 3.4 / 4.0 also dropped these from the default install; list them
# explicitly so Jekyll can load them.
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
