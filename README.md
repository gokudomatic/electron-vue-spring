<div align="center">
<br>
<img width="500" src="/docs/images/logo.png" alt="electron-vue">
<br>
<br>
</div>

<p align="center" color="#6a737d">
The boilerplate for making electron applications built with vue (pretty much what it sounds like).
</p>

<div align="center">

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)
</div>

<div align="center">

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
</div>

## Overview

The aim of this project is to add support of Spring Boot to the boilertemplate of [SimulatedGREG](https://github.com/SimulatedGREG/electron-vue).

#### Check out the detailed documentation [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

Things you'll find in this boilerplate in addition of the original...

* Basic Spring Boot project with Maven
* Loader page that waits until the Spring Boot application is ready

### Getting Started

This boilerplate was built as a template for [vue-cli](https://github.com/vuejs/vue-cli) and includes options to customize your final scaffolded app. The use of `node@^7` or higher required. electron-vue also officially recommends the [`yarn`](https://yarnpkg.org) package manager as it handles dependencies much better and can help reduce final build size with `yarn clean`.

```bash
# Install vue-cli and scaffold boilerplate
npm install -g vue-cli
vue init gokudomatic/electron-vue-spring my-project

# Install dependencies and run your app
cd my-project
yarn # or npm install
yarn run dev # or npm run dev
```

##### Are you a Windows User?

Make sure to check out [**A Note for Windows Users**](https://simulatedgreg.gitbooks.io/electron-vue/content/en/getting_started.html#a-note-for-windows-users) to make sure you have all the necessary build tools needed for electron and other dependencies.

##### Wanting to use Vue 1?

Just point to the `1.0` branch. Please note that electron-vue has officially deprecated the usage of `vue@^1`, so project structure, features, and documentation will reflect those changes ([**legacy documentation**](https://github.com/SimulatedGREG/electron-vue/tree/1.0/docs)).

```bash
vue init gokudomatic/electron-vue-spring#1.0 my-project
```

### Next Steps

Make sure to take a look at the [documentation](https://simulatedgreg.gitbooks.io/electron-vue/content/). Here you will find useful information about configuration, project structure, and building your app. There's also a handy [FAQs](https://simulatedgreg.gitbooks.io/electron-vue/content/en/faqs.html) section.
