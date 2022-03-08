# rivet-source/node_modules/stylelint-config-rivet-scss/README.md
# stylelint-config-rivet-scss
This package extends `stylelint-config-standard-scss` (see [stylelint documentation](https://stylelint.io/user-guide/configure#extends)) with rules specific to creating projects within the Rivet extended universe. It is a Rivet-specific shareable `SCSS` config for `Stylelint`.

Because this configuration is `SCSS` specific, it is assumed that you will be using [Dart Sass](https://sass-lang.com/dart-sass).

## Installation

You can include this package in your project by installing it via `npm`:
```
npm install --save-dev stylelint-config-rivet-scss
```

## Usage

Next you will need to setup the configuration for your project using one of the following options:

1. `package.json`

```
{
  "stylelint": {
    "extends": "stylelint-config-rivet-scss"
  }
}
```

2. `.stylelintrc`

```
{
  "extends": "stylelint-config-rivet-scss"
}
```

3. `stylelint.config.js`

```
module.exports = {
  'extends': 'stylelint-config-rivet-scss'
}
```

## Build tools

### Gulp
Many traditional Rivet projects use `Gulp` to handle their build processes. This `stylelint` configuration is ideal for integrating with `Gulp`.

First, you will need to make sure that `Gulp`, `Sass`, and the `Gulp` build tools `Gulp Sass` and `Gulp Stylelint` are installed.

```
npm install --save-dev gulp gulp-stylelint gulp-sass sass
```

Next, you will need to incorporate this into your `Gulp` setup. Below is an example `gulpfile.js`, which shows how to include the build tool in your file and how to write the linting task.

```
const { src } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const stylelint = require('gulp-stylelint');

function lintSassWatch() {
  return src("src/sass/**/*.scss")
  .pipe(stylelint({
    failAfterError: false,
    reporters: [
      {formatter: 'string', console: true}
    ]
  }));
}

function lintSassBuild() {
  return src("src/sass/**/*.scss")
  .pipe(stylelint({
    reporters: [
      {formatter: 'string', console: true}
    ]
  }));
}

```

We recommend writing separate functions for linting `build` versus `watch` tasks. For lint functions related to your `watch` tasks we recommend including the `failAfterError: false` option. This option defaults to `true`, and will cause your watch process to fail if it encounters an error. While this functionality is desirable for a `build` task, it can be more annoying than helpful for a `watch` task.

### webpack
Finally, there are a number of Rivet-based applications which rely on `webpack` to bundle their code.

First, you will need to make sure that the `stylelint` plugin for `webpack` is installed.

```
npm install --save-dev stylelint-webpack-plugin
```

Next, you will need to setup `stylelint` in your `webpack` configuration. Below is an example `webpack.config.js` file.

```
const stylelint = require('stylelint-webpack-plugin');
 
module.exports = {
  // ...
  plugins: [
    new stylelint({ failOnError: true }),
  ],
  // ...
}

```

It's important to note that when using transpilers (such as `babel`) and linting tools, the order they are listed in usually matters as you want to ensure that your code is linted before being transpiled.

### Additional integrations

Stylelint has [integrations available for most of the major, modern code editors](https://stylelint.io/user-guide/integrations/editor).