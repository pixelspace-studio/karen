# Karen Code Inspector — Project Notes

## NPM Publishing
- **DO NOT run `npm publish` manually.** Publishing is handled via GitHub Actions.
- Publishing is triggered by pushing a **git tag** (e.g., `v1.0.0`).
- Workflow: bump version in `package.json` -> commit -> `git tag vX.Y.Z` -> `git push && git push origin vX.Y.Z`
- Use `gh run list` to check publish status.

## Project Structure
- `src/index.js` — CLI entry point logic (`npx @pixelspace/karen`)
- `bin/karen.js` — CLI bin wrapper
- `content/karen-skill.md` — Karen skill definition (plain markdown)
- `src/create-skill.js` — Persist skill to temp file
- `src/detect.js` — TTY detection

## Versioning
- Semver: `1.0.0` format

## Key Conventions
- Zero external dependencies in CLI (ANSI escape codes, no chalk/figlet)
- Brand accent color: `#FF69B4` (Hot Pink) / `rgb(255,105,180)` (CLI ANSI)
- Content is plain `.md` — no JS template wrappers, no `extract.js`
- No web viewer, no multi-language support
