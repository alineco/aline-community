import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

export const ROOT = new URL('..', import.meta.url).pathname;
export const SKILLS_DIR = join(ROOT, 'skills');

/** Reads every `skills/<folder>/SKILL.md`. Problems are returned, not thrown, so one run reports all of them. */
export function readSkills() {
  return readdirSync(SKILLS_DIR)
    .filter(folder => statSync(join(SKILLS_DIR, folder)).isDirectory())
    .sort()
    .map(folder => readSkill(folder));
}

function readSkill(folder) {
  const path = join('skills', folder, 'SKILL.md');
  let content;
  try {
    content = readFileSync(join(ROOT, path), 'utf8');
  } catch {
    return { errors: ['SKILL.md is missing.'], folder, path };
  }
  const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(content);
  if (!match) return { errors: ['SKILL.md must start with YAML frontmatter between --- lines.'], folder, path };
  let frontmatter;
  try {
    frontmatter = parse(match[1]);
  } catch (error) {
    return { errors: [`The frontmatter is not valid YAML: ${error.message}`], folder, path };
  }
  if (!frontmatter || typeof frontmatter !== 'object' || Array.isArray(frontmatter))
    return { errors: ['The frontmatter must be a YAML mapping.'], folder, path };
  return { body: content.slice(match[0].length), errors: [], folder, frontmatter, path };
}
