## Highway

Highway is a lightweight (**1.8kb** *minified and gzipped*), dependency-free, complete and easy-to-use **Router** written in **ES6**.

## Table of Contents

- [How it works](#how-it-works)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
	- [Setup](#setup)
	- [Transitions](#transitions)
	- [Views](#views)
	- [Methods](#methods)
	- [Analytics](#analytics)
- [License](#license)

## How it works

Nowadays we are working hard everyday to make the Internet a more **creative** place. We have a countless number of technologies, techniques and as many tools to do so. Today, I would like to present you the next one you will use.

The default behavior of your browser reloading the page everytime you click a link has been deprecated since a few years. Thanks to Ajax techniques we can now create awesome transitions between our pages, offering our users a better and more immersive experience.

Highway is a lightweight (**1.8kb** *minified and gzipped*), dependency-free, complete and easy-to-use **Router** written in **ES6**. It will never be so easy to add transitions to your websites. The only limit is **your imagination**.

Everytime a user will click a link, the requested page will be loaded in **Ajax** with the **Fetch API**. This will give you the ability to add transitions between the current page and the requested one.

## Features

- Modern & lightweight
- Clean & extensible
- Setup in seconds
- Create views is so simple...
- ... Oh! And transitions as well
- Transitions mode (out-in, in-out or both)
- Minimum HTTP Requests
- Cache visited pages
- No dependencies
- ...


## Installation

Highway supports *Universal Module Definition (UMD)* and can be installed:

**1. Using [NPM](https://www.npmjs.com/get-npm)**:

```
npm install highway.js --save
```

**2. Using [Bower](https://bower.io/)**:

```
bower install highway.js --save
```

**3. Using [Yarn](https://yarnpkg.com/en/)**:

```
yarn add highway.js
```

**4. Standalone**:

```html
<script type="text/javascript" src="highway.min.js"></script>
```

## Usage
### Attributes
`[router-wrapper]`

`[router-view]`

`[router-active]`

`[router-disabled]`

### Transitions
`out-in`

`in-out`

`both`

### Views

`View.onEnter()`

`View.onLeave()`

`View.onEnterCompleted()`

`View.onLeaveCompleted()`

### Analytics

## Examples

- [Fade](https://github.com/Anthodpnt/Highway/tree/master/examples/fade)

## License

See the [LICENSE](https://github.com/Anthodpnt/Highway/blob/master/LICENSE.md) file for license rights and limitations (MIT).