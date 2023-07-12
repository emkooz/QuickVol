# three-base

This is a template to start any TypeScript-based three.js project.

## Installation

1. Make sure [node.js](https://nodejs.org/en/download/) and [pNPM](https://pnpm.io/installation) are installed.
    - pNPM can be installed with `npm install -g pnpm`
2. Clone this repository.
3. Run `pnpm i` in the base folder, which will setup the project and install all required dependencies.

If deploying remotely (such as to Github Pages), make sure to change `base` in _vite.config.js_ to the base URL that the page will be hosted on. Example: if hosting on example.com/coolwebpage, change `base` to `/coolwebpage/`

## Usage

-   `pnpm start` will start a local vite server which will reload on any changes.
-   `pnpm build` will compile the required files for distribution into the `dist` folder.
-   `pnpm build-dev` will build and start a vite server with the production build to confirm it built correctly.
-   `pnpm deploy-pages` will deploy everything in the _dist_ folder to the "dist" branch of the current repository (current changes are built before deploying).

## Layout

The base folder contains the main configuration files, which should suffice for most use cases.

Folder structure:

-   **src**
    -   _app.ts_
        -   Starter file where we load our CSS and start the three.js project
    -   _scene.ts_
        -   Loads everything required for the scene, contains render loop.
    -   _camera.ts_
        -   Handles everything with the camera of the scene, using `ArcballControls`.
    -   _ui.ts_
        -   Basic setup for a UI using `tweakpane`.
    -   _unlit_cubes.ts_
        -   A simple example of displaying cubes using instanced meshes.
    -   **static**
        -   _app.css_
            -   Global CSS for any HTML elements, which is included in _app.ts_.
    -   **assets**
        -   Any asset that you want to load (texture, JSON, etc) goes here. These can be loaded directly from source _without_ the referring to the "assets" folder. Example: to load "example.txt" under "assets/example.txt" you would access "example.txt" without the "assets/".
-   **dist**
    -   The distribution files are compiled to this folder when you use `yarn build`.
-   _index.html_
    -   The base HTML file that vite will build and run from.
