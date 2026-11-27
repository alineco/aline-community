import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { ROOT, readSkills } from './skills.mjs';

/** Writes the skill table in README.md and the Claude Code marketplace file. `--check` only compares. */
const check = process.argv.includes('--check');
const skills = readSkills().filter(skill => skill.frontmatter);
const README_START = '<!-- skills:start -->';
const README_END = '<!-- skills:end -->';

const readmePath = join(ROOT, 'README.md');
const readme = readFileSync(readmePath, 'utf8');
const start = readme.indexOf(README_START);
const end = readme.indexOf(README_END);
if (start === -1 || end === -1) throw new Error(`README.md needs ${README_START} and ${README_END}.`);
const nextReadme = `${readme.slice(0, start + README_START.length)}\n${getSkillTable()}\n${readme.slice(end)}`;

const marketplacePath = join(ROOT, '.claude-plugin', 'marketplace.json');
const nextMarketplace = `${JSON.stringify(getMarketplace(), null, 2)}\n`;

const stale = [
  [readmePath, readme, nextReadme],
  [marketplacePath, readOptional(marketplacePath), nextMarketplace],
].filter(([, current, next]) => current !== next);
if (check) {
  if (stale.length) {
    for (const [path] of stale) console.error(`${path.slice(ROOT.length)} is out of date. Run \`npm run build\`.`);
    process.exit(1);
  }
  console.log('Generated files are up to date.');
} else for (const [path, , next] of stale) writeFileSync(path, next);

function getSkillTable() {
  const categories = [...new Set(skills.map(skill => skill.frontmatter.metadata.category))].sort();
  return categories
    .map(category => {
      const rows = skills
        .filter(skill => skill.frontmatter.metadata.category === category)
        .map(({ folder, frontmatter }) => `| [${frontmatter.metadata['display-name']}](skills/${folder}) | ${frontmatter.description.replaceAll('|', '\\|')} |`);
      return [`### ${category}`, '', '| Skill | What it does |', '| --- | --- |', ...rows].join('\n');
    })
    .join('\n\n');
}

function getMarketplace() {
  return {
    name: 'aline-community',
    owner: { name: 'Aline', url: 'https://aline.co' },
    metadata: { description: 'Agent skills for legal teams, published by Aline.' },
    plugins: [
      {
        name: 'aline-legal',
        source: './',
        description: 'Contract review, drafting and research skills for in-house legal teams.',
        author: { name: 'Aline' },
        license: 'Apache-2.0',
        strict: false,
        skills: skills.map(({ folder }) => `./skills/${folder}`),
      },
    ],
  };
}

function readOptional(path) {
  try {
    return readFileSync(path, 'utf8');
  } catch {
    return '';
  }
}
