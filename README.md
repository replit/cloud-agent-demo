# Cloud Agent Demo

A small, frontend-only landing page about Replit Cloud Agents, designed for your first repository preview. Run the app, explore its responsive layout, and practice a small change in your own independent copy.

**Internal preview:** This repository is internal to the Replit enterprise and is not approved for public release. It is an educational example, not a live Cloud Agents interface or a launch announcement.

## Learn with Replit

- **Start here:** Explore the [Replit documentation](https://docs.replit.com/).
- **Bring a repository:** Follow [Import from a provider](https://docs.replit.com/build/import-from-providers) for repository import guidance.
- **Understand version control:** Read [Using the Git pane](https://docs.replit.com/features/workspace-tools/git-interface).

These links point to public documentation. They do not imply that this demo or its source narrative has been approved for publication.

## Open your first preview in Replit

1. **Open Replit:** Go to [Open Replit](https://replit.com).
2. **Copy the prompt:** Send the following prompt in Replit. You need access to this internal repository.

   ```text
   Run this repository and show me a preview: https://github.com/replit/cloud-agent-demo
   Do not push changes or open a pull request.
   ```

3. **View the result:** Open the returned preview and explore the page. This is a preview-only exercise, not permission to publish or change the upstream repository.

**Practice pull requests:** First create an independent repository you own from an approved template or file copy, then practice changes and PRs only there. Simply cloning the demo retains its upstream remote and does not create an independent repository. Inspect `git remote -v` and confirm the destination is your own repository before any authorized push. Keep copies private until publication is explicitly approved.

## Run locally

Use Node.js 22.12 or newer. From this directory:

```sh
npm install
npm run dev
```

Open the local address printed by Vite. No environment variables, accounts, secrets, backend or database are required.

Optional checks:

```sh
npm run typecheck
npm run build
npm run serve
```

The build is a local output only. Building does not publish the site.

## Preview-only policy

- **Preview first:** Run and explore this demo without publishing it.
- **Practice independently:** Create your own independent repository from an approved template or a copy of this directory before practicing changes. Keep it private until publication is explicitly approved.
- **Protect upstream:** Do not push to or open pull requests against the upstream demo repository.
- **Check remotes:** A clone alone does not remove the upstream remote. Inspect `git remote -v` before any Git operation. A file copy without the original `.git` directory does not carry its Git history or remotes.
- **Get authorization:** Do not create repositories, push, open pull requests, or perform other external Git operations without explicit authorization.
- **Pull request policy:** The upstream repository is intended to have pull requests disabled for everyone, including maintainers. This must be configured and verified in GitHub under Settings > General > Features > Pull requests. These written instructions do not enforce GitHub permissions.

This project is separate from existing documentation work. Do not modify `replit/replit-docs` or PR2307.

## What this demo does

- **Informational page:** Explains how Replit Cloud Agents can help teams propose changes to existing GitHub and GitLab codebases while engineers control what ships.
- **Local interactions:** Page anchors and any navigation controls work entirely in the browser.
- **Illustrative content:** Workflow visuals are examples, not real customer data, live agent activity, test results or an operational product interface.
- **No data collection:** No analytics, forms, authentication, external services or API requests.

The supplied source narrative is unpublished. Do not distribute the source draft or treat this demo as publication approval. Rollout details, future integrations, webinar dates and internal figures are intentionally omitted.

## Small and portable

### Try a first change

1. Create an independent template/copy repository before editing.
2. Run the app with the commands above.
3. Change a heading in `src/App.tsx` or an accent style in `src/index.css`.
4. Preview the result at desktop and mobile widths.
5. Run the type check and build. Keep practice commits in your own repository.

This directory is the standalone app. Copy its source, configuration, assets, README and AGENTS files without `node_modules`, `dist`, `.git`, or `.replit-artifact`. It does not depend on the surrounding workspace's API server, database libraries or mockup sandbox.

Edit the page in `src/App.tsx` and its styles in `src/index.css`. Official Replit assets are included locally; preserve their proportions and branding. No remote fonts or generated UI screenshots are needed.

Vite defaults to port 5173 and root path `/`. The optional `PORT` and `BASE_PATH` values support hosted previews. They are not secrets and are not required locally.
