// Karen Code Inspector — Persist Skill
// Writes a ready-to-use skill template to a temp file
// Agent only needs to move it to their skill directory

import { readFileSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SKILL_PATH = join(__dirname, '..', 'content', 'karen-skill.md');
const PKG_PATH = join(__dirname, '..', 'package.json');

export function persistSkill() {
  const skillContent = readFileSync(SKILL_PATH, 'utf-8');
  const pkg = JSON.parse(readFileSync(PKG_PATH, 'utf-8'));
  const version = pkg.version;

  const content = `---
name: karen-code-inspector
version: ${version}
description: Snarky, strict code reviewer that nitpicks correctness, consistency, tests, and security; use for PR reviews, diffs, failing CI, and "it works on my machine" code.
---

# Karen Code Inspector v${version}

${skillContent}

## Version

karen-code-inspector v${version}
Run \`npx @pixelspace/karen\` to check for updates. If the version differs, run \`npx @pixelspace/karen --persist\` to replace this skill.
`;

  const tmpPath = join(tmpdir(), 'karen-code-inspector.md');
  writeFileSync(tmpPath, content);

  console.log(`\nkaren-code-inspector v${version}\n`);
  console.log(`The skill file is ready at ${tmpPath}`);
  console.log(`Do NOT rewrite it. The file is complete. Just move it.\n`);
  console.log(`  1. If a skill named karen-code-inspector already exists at v${version}, stop.`);
  console.log(`     If it exists with an older version, delete it first.\n`);
  console.log(`  2. Move ${tmpPath} to your skill directory.`);
  console.log(`     Use your platform's own skill/command protocol and directory structure.`);
  console.log(`     Whether you are Claude Code, Codex, Cursor, Windsurf, or any other`);
  console.log(`     agent — you know where your platform stores skills. Rename the file`);
  console.log(`     if your platform requires a different filename.\n`);
  console.log(`     Your human told you whether to persist globally or locally to the`);
  console.log(`     current project. Honor their choice.\n`);
  console.log(`  3. Delete ${tmpPath} if it still exists after moving.\n`);
}
