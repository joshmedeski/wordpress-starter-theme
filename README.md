# wordpress-starter-theme

A WordPress starter theme that uses Timber and TailwindCSS

## Prerequisites

You will need the following dependencies installed on your computer for development.

- Docker Compose
- Node.js

## How to Use

To use this template, run the following commands in the root of the project.

```
docker-compose up -d
npm install
npm run start
```

Go to [localhost:3000](http://localhost:3000/) to start developing.

**Note:** You will need to install the Timber plugin and activate the WordPress Starter Theme when you first start the project.

## Theme Unit Test

Use [Theme Unit Test](https://codex.wordpress.org/Theme_Unit_Test) to test your theme.

# Tasks

- [ ] Add support for social media (og tags, Twitter tags)
- [ ] Add required plugin script
- [ ] Style image grid properly
- [ ] Make video embeds responsive
- [ ] Add JavaScript support
  - [ ] Allow header menu dropdowns
- [ ] Add support for page with a sidebar
- [ ] Add footer widgets
- [ ] Add header widgets
- [ ] Add dark mode support (with toggle widget and/or include in header)

## Wed, Nov 3, 2021

- [x] Add Docker support
- [x] Add TailwindCSS support
- [x] Add Browsersync support
- [x] Add default layout
- [x] Add layout with prose
- [x] Make default layout `min-h-screen`
- [x] Make all default pages wrapper with basic styling
