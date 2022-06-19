# Repo containing files for Mille's Corner

Uses [Astro](https://docs.astro.build/en/getting-started/) for HTML5/Markdown templating, and Tailwind CSS for styling.

## Development Guide

- Clone the repository locally.
- Make sure you have Node.js installed (comes with `npm`)
  - https://nodejs.org/en/download/
- Within the command line, install dependencies...

```bash
npm install
```

- and run the dev server!

```bash
npm run dev
```

- `Ctrl + LMB` the shortcut link within the Terminal to open the site on your browser.

- If you want to test what the final build will look like after build, run this...

```bash
npm run build
# wait for build process
npm run preview
```

> #### Notes
>
> - Astro is the build tool here, which brings all the pages together into a nice cohesive website within the `gh-pages` branch. Don't touch that branch... lol
> - Whenever commits are pushed into `main` branch, a *GitHub Action* (defined in `.github/workflows/deploy.yml`) will run, building the website on the GitHub servers automatically and pushing the output into `gh-pages`. The URL to the website is how you  

### Creating New Redirects

- Create a new `.md` file within `src/pages/`, this will be the URL that you will be linking to.
- Follow the example within [docs/src.example/pages](docs/src.example/pages)
