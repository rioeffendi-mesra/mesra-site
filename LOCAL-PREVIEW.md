# Previewing the site locally

The site is built with Jekyll. To preview it on your own Mac, you run a small
local web server that builds the site and serves it at a private address only
you can see (`http://localhost:4000`). Changes show up when you refresh.

## One-time setup (do this once)

Open **Terminal** (press ⌘+Space, type "Terminal", hit Enter) and run each line:

1. Install Homebrew (skip if you already have it):
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Install a modern Ruby:
   ```
   brew install ruby
   ```
3. Tell your Mac to use that Ruby (then close and reopen Terminal):
   ```
   echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
   ```
4. Go into the site folder and install its dependencies:
   ```
   cd "~/Desktop/mesra web/mesra-site"
   gem install bundler
   bundle install
   ```

## Every time you want to preview

```
cd "~/Desktop/mesra web/mesra-site"
bundle exec jekyll serve --livereload
```

Then open **http://localhost:4000** in your browser. Leave Terminal running.
With `--livereload`, the page refreshes automatically each time a file is saved.
Press **Ctrl+C** in Terminal to stop the server when you're done.

## Workflow

1. I edit files in `mesra-site`.
2. You refresh `localhost:4000` to see the change.
3. Happy with it? Commit + push in GitHub Desktop → live in ~1–2 min.

Notes:
- `Gemfile` and `Gemfile.lock` are safe to commit — they pin the same versions
  GitHub Pages uses, so local matches live.
- If a blog post doesn't appear locally, check its date isn't in the future.

## Marking a post as updated (for SEO freshness)

When you make a **real content revision** to an existing post — e.g. a guideline
version, ELV table, or regulation detail changes — add one line to that post's
front matter:

```yaml
date: 2026-06-19          # original publish date — leave unchanged
last_modified_at: 2026-06-30   # the date you revised it
```

That single field updates three things automatically:
- the visible "Updated 30 June 2026" date shown under the post title,
- the `dateModified` in the post's Google schema (BlogPosting), and
- the `<lastmod>` entry in `sitemap.xml`.

Only add it for genuine edits. Bumping the date without real changes doesn't help
SEO and can hurt trust over time. Posts without `last_modified_at` just show their
publish date as normal.
