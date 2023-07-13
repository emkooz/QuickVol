# QuickVol

No frills NRRD visualizer in the browser.

## Installation

1. Make sure [node.js](https://nodejs.org/en/download/) and [pNPM](https://pnpm.io/installation) are installed.
    - pNPM can be installed with `npm install -g pnpm`
2. Clone this repository.
3. Run `pnpm i` in the base folder, which will setup the project and install all required dependencies.

If deploying remotely (such as to Github Pages), make sure to change `base` in _vite.config.js_ to the base URL that the page will be hosted on. Example: if hosting on example.com/coolwebpage, change `base` to `/coolwebpage/`

## Usage

-   `pnpm dev` will start a local vite server which will reload on any changes.
-   `pnpm build` will compile the required files for distribution into the `dist` folder.
-   `pnpm build-dev` will build and start a vite server with the production build to confirm it built correctly.
-   `pnpm deploy-pages` will deploy everything in the _dist_ folder to the "dist" branch of the current repository (current changes are built before deploying).
