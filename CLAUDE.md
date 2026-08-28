# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

Codex is a personal playground monorepo for learning and small builds — not a single application. There is no root-level build system, dependency manifest, or test suite. Each project under `projects/` is self-contained and brings its own tooling (its own `README.md`, and where relevant its own `requirements.txt` / `package.json` / source).

Top-level folders and their intent:

- `projects/` — small, self-contained apps under active development. One folder per project.
- `experiments/` — throwaway prototypes, API/scraping tests, learning code. Not expected to be polished.
- `ideas/` — plain-text idea capture (problem, audience, core feature, what to learn, possible tech) before any code exists. When an idea gets built, it becomes a folder under `projects/`.

Guiding rule from `README.md`: keep only small learning projects here. If something grows into a serious standalone product or portfolio piece, move it to its own GitHub repository.

## Working in this repo

- Scope work to a single project/experiment folder; treat sibling folders as unrelated codebases.
- New project → create `projects/<name>/` with its own `README.md` and its own dependency/build setup.
- Commands (install, build, run, test) are per-project — check that project's `README.md`. Do not assume a shared toolchain.

## Commands

There are no repo-wide build/lint/test commands.

### `projects/portfolio` (static site, no build step)

Plain HTML/CSS/JS — `index.html`, `styles.css`, `script.js`, no dependencies or bundler. Serve it from the project directory:

```bash
cd projects/portfolio && python3 -m http.server 8000   # then open http://localhost:8000
```

Or open `projects/portfolio/index.html` directly in a browser. `script.js` is vanilla JS (loaded with `defer`) driving the nav toggle, smooth in-page scrolling, and `IntersectionObserver`-based reveal animations and active-nav highlighting.
