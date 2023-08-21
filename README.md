# Simply_chocolate_Landing_page

### Training project:

Simple Landing page simply for chocolate :chocolate_bar:

Adaptive marking using mobile first technology. Vite template used.

[Design-layuot](<https://www.figma.com/file/CXbLOX3U8BTPzk9RVl6OSJ/Simply-Chocolate-(Copy)?type=design&mode=design&t=Oy1SntzcCzQkCpwI-1>)

## Preparing for work

1. Make sure you have the LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) it if necessary.
2. Install the basic project dependencies in the terminal with the command
   `npm install`.
3. Start the development mode by running the command `npm run dev` in the
   terminal.
4. Go to the following address in your browser
   [http://localhost:5173](http://localhost:5173). This page will automatically
   reload automatically after saving changes to the project files.

## Deploy

The production version of the project will be automatically built and deployed
to GitHub Pages, in the `gh-pages` branch, whenever the `main` branch is
updated. For example, after a direct push or an accepted pool-request. To do
this, you need to change the file package.json file, change the value of the
`--base=/<REPO>/` flag for the `build` command, by replacing `<REPO>` with the
name of your repository, and submit the changes to GitHub.

```json
"build": "vite build --base=/<REPO>/",
```

Next, go to the GitHub repository settings (`Settings` > `Pages`) and set up the
distribution of the production version of the files from the `/root` folder of
the `gh-pages` branch, if it was not done automatically.
