import { readSkills } from './skills.mjs';

/** The same limits Aline applies when it imports a skill. */
const NAME_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_NAME_CHARS = 64;
const MAX_DESCRIPTION_CHARS = 1024;
const MAX_COMPATIBILITY_CHARS = 500;
const REQUIRED_METADATA = ['display-name', 'author', 'category', 'version'];

let failed = 0;
const skills = readSkills();
for (const skill of skills) {
  const errors = [...skill.errors, ...(skill.frontmatter ? getErrors(skill) : [])];
  if (!errors.length) continue;
  failed += 1;
  for (const error of errors) {
    console.error(`${skill.path}: ${error}`);
    if (process.env.GITHUB_ACTIONS) console.log(`::error file=${skill.path}::${error}`);
  }
}
if (failed) {
  console.error(`\n${failed} of ${skills.length} skills have problems.`);
  process.exit(1);
}
console.log(`All ${skills.length} skills are valid.`);

function getErrors({ body, folder, frontmatter }) {
  const errors = [];
  const { compatibility, description, license, metadata, name } = frontmatter;
  if (typeof name !== 'string' || !name) errors.push('`name` is required.');
  else {
    if (name.length > MAX_NAME_CHARS) errors.push(`\`name\` must be ${MAX_NAME_CHARS} characters or fewer.`);
    if (!NAME_PATTERN.test(name))
      errors.push('`name` may only use lowercase letters, numbers and single hyphens.');
    if (name !== folder) errors.push(`\`name\` must match the folder name, \`${folder}\`.`);
  }
  if (typeof description !== 'string' || !description.trim()) errors.push('`description` is required.');
  else if (description.length > MAX_DESCRIPTION_CHARS)
    errors.push(`\`description\` must be ${MAX_DESCRIPTION_CHARS} characters or fewer.`);
  if (license !== undefined && typeof license !== 'string') errors.push('`license` must be text.');
  if (
    compatibility !== undefined &&
    (typeof compatibility !== 'string' || !compatibility || compatibility.length > MAX_COMPATIBILITY_CHARS)
  )
    errors.push(`\`compatibility\` must be text of 1-${MAX_COMPATIBILITY_CHARS} characters.`);
  const invocation = frontmatter['disable-model-invocation'];
  if (invocation !== undefined && typeof invocation !== 'boolean')
    errors.push('`disable-model-invocation` must be `true` or `false`.');
  if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) errors.push('`metadata` is required.');
  else {
    for (const [key, value] of Object.entries(metadata))
      if (value === null || typeof value === 'object') errors.push(`\`metadata.${key}\` must be text.`);
    for (const key of REQUIRED_METADATA)
      if (metadata[key] === undefined || metadata[key] === '') errors.push(`\`metadata.${key}\` is required.`);
  }
  if (!body?.trim()) errors.push('The skill has no instructions after the frontmatter.');
  return errors;
}
