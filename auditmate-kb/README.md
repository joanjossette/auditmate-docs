# AuditMate KB — vanilla static site

A framework-free rebuild of the React/Vite knowledge base. Plain HTML, Tailwind
(via CDN), and vanilla JS ES modules. No build step, no npm install required
to run it.

## Structure

```
index.html            Landing page (hero, search, topic cards)
docs.html             Doc viewer — reads ?doc=<path>.md from the URL
css/styles.css         Custom styles layered on Tailwind utilities
js/
  config.js            Path helpers (doc route <-> file <-> viewer URL)
  docs-structure.js     Ported sidebar tree + topic cards (was shared/docs-structure.ts)
  search.js             Fetches docs/searchIndex.json, renders a search box
  main.js                Wires up index.html
  docs.js                 Wires up docs.html: fetch, frontmatter parse, marked render,
                           link/image rewriting, breadcrumbs, active sidebar state
components/
  navbar.js             Header + theme toggle
  sidebar.js             Recursive nav tree
  footer.js               Footer
docs/                  All markdown content, copied as-is (+ prebuilt searchIndex.json)
images/                 All doc images + logo
```

## Running locally

Markdown is loaded via `fetch()`, which browsers block on `file://` URLs, so
you need a static file server — no Node/build tooling required:

```bash
cd auditmate-kb
python3 -m http.server 8080
# or: npx serve .
```

Then open `http://localhost:8080/`.

## How doc links work

There's no SPA router. `docs.html?doc=getting-started/installation.md` loads
that markdown file directly. Internal links inside the markdown
(`/docs/getting-started/...`, matching the old React routes) and the sidebar
tree in `js/docs-structure.js` are both rewritten at render time to this
`docs.html?doc=...` form. All paths are relative (no leading `/`), so the
site works from a domain root or a sub-path without any config.

To add a new doc: drop the `.md` file under `docs/`, add an entry to
`docsStructure` in `js/docs-structure.js` if it should appear in the sidebar,
and add it to `docs/searchIndex.json` if it should be searchable (title,
description, path in `/docs/...` form, and plain-text content).

## Known pre-existing content issue

`docs/getting-started/installation.md` links to
`/docs/getting-started/installation/iis-app-pool-site-configuration`, but the
actual file is `iis-application-pool-and-site-configuration.md` (matching the
sidebar). This mismatch was already present in the original React app's
content (it would 404 there too) — carried over as-is rather than silently
"fixed" during migration. Worth a one-line edit in the source markdown.

## Deployment

It's a static site — any static host works.

**GitHub Pages**
- Push the contents of `auditmate-kb/` to a repo (or a `docs/`-named folder /
  `gh-pages` branch, per GitHub Pages settings).
- Enable Pages in repo Settings → Pages, pointing at that branch/folder.
- Because all paths are relative, this works fine even at
  `username.github.io/repo-name/`.

**Netlify**
- Drag-and-drop the `auditmate-kb/` folder into Netlify's dashboard, or connect
  the repo with build command `(none)` and publish directory `vanilla-kb`.

No environment variables, no server, no database — the old `server/`,
`shared/schema.ts`, and Drizzle/Postgres setup are not needed by this site at
all since there's no auth or forms.
