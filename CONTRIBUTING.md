# Contributing

Thanks for helping improve these skills. Aline publishes everything on `main` to customers, so changes go through review.

## Before you start

- For a new skill, open an issue with the **Propose a skill** template first, so we can agree on the scope before you write it.
- For a fix to an existing skill, a pull request is enough.

## Add or change a skill

1. Create `skills/<name>/SKILL.md`. Use lowercase letters, numbers and single hyphens for the name, up to 64 characters, and use the same name for the folder.
2. Fill in the frontmatter as shown in the [README](README.md#how-a-skill-is-laid-out). Write the `description` for the agent: say what the skill does and when to use it, in 1,024 characters or fewer.
3. Write the instructions in the body. Put long reference material in `references/` and link to it from `SKILL.md`.
4. Bump `metadata.version` when you change an existing skill: the patch number for wording, the minor number for new behavior, the major number when the output changes shape.
5. Run the checks and regenerate the README table:

   ```sh
   npm install
   npm run build
   npm run check
   ```

6. Open a pull request. Say what the skill is for and paste one example of its output.

## What we look for in review

- The skill does one job and the description says when to use it.
- The instructions work with only the documents the user attaches. No outside services, no credentials.
- No client names, real matters, personal data or confidential material anywhere in the folder, including examples.
- Output that a lawyer can check: quotes from the source document, clear risk levels, and no claims of legal certainty.

## License

By contributing, you agree that your contribution is licensed under the [Apache 2.0 license](LICENSE).
