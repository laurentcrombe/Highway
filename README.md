## Highway

Highway is a lightweight (**1.8kb** *minified and gzipped*), dependency-free, complete and easy-to-use **Router** written in **ES6**.

## Table of Contents

- [How it works](#how-it-works)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
	- [Attributes](#1-attributes)
	- [Transitions](#2-transitions)
	- [Views](#3-views)
	- [Analytics](#4-analytics)
	- [Router](#5-router)
- [Browser Support](#browser-support)
- [License](#license)

## How it works

Nowadays we are working hard everyday to make the Internet a more **creative** place. We have a countless number of technologies, techniques and as many tools to do so. Today, I would like to present you the next one you will use.

The default behavior of your browser reloading the page everytime the window location change has been deprecated since a few years. Thanks to Ajax techniques we can now create awesome transitions between our pages, offering our users a better and more immersive experience.

Highway is a lightweight (**1.8kb** *minified and gzipped*), dependency-free, complete and easy-to-use **Router** written in **ES6**. It will never be so easy to add transitions to your websites. The only limit is **your imagination**.

Everytime the window location changes, the requested page/view will be loaded in **[Ajax](https://developer.mozilla.org/en-US/docs/AJAX)** with the **[Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API)**. This will give you the ability to add transitions between the current page/view and the requested one.

## Features

- Modern & lightweight
- Clean & extensible
- Setup in seconds
- Create views is so simple...
- ... Oh! And transitions as well
- Transition mode (out-in, in-out or both)
- Minimum HTTP Requests
- Cache visited pages/views
- Dependency-free
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

## Usage
### 1. Attributes

Highway needs some **custom attributes** on your DOM elements to work properly.  
Here are these attributes and how to use them to setup your DOM:

| Attributes          | Description      | Value      | Required  |
|---------------------|------------------|------------|-----------|
| `[router-wrapper]`  | Contain Views    | N/A        | **YES**   |
| `[router-view]`     | Contain View DOM | View Name  | **YES**   |
| `[router-active]`   | Add Active Class | Class Name | **NO**    |
| `[router-disabled]` | Disable Router   | N/A        | **NO**    |

Here is a **sample structure** combining all these attributes:

```html
<main>
  <!-- Header - No transition -->
  <header>
    <ul>
      <li><a href="#" router-active="is-active"></a></li>
      <li><a href="#" router-active="is-active"></a></li>
      <li><a href="#" router-disabled></a></li>
    </ul>
  </header>
	
  <!-- Router Wrapper -->
  <div router-wrapper>
    <!-- Router View - Transition -->
    <div router-view="my-view">
      <h1>My View</h1>
    </div>
  </div>
	
  <!-- Footer - No transition -->
  <footer></footer>
</main>
```
Note that the router will be automatically **disabled** when `target="_blank"` and that **no transition** will apply on DOM elements **outside** the `[router-wrapper]`. 

### 2. Transitions

Transition are objects with `in` and `out` methods.  
These methods take arguments given by the router. **You don't even need to care about them but don't forget them**.

| Arguments  | Description                                                 |
|------------|-------------------------------------------------------------|
| `view`     | View's DOM you can use for your transitions                 |
| `complete` | Callback method you **must call** when transitions are over |

Here is a **sample structure** of a transition:

```javascript
const TransitionName = {
  in: (view, complete) {
    // Transition In
  },
  out: (view, complete) {
    // Transition Out
  },
};

export default TransitionName;
```

Your can find more [examples here](#examples).  
Besides you can set the **mode** of your transitions when you [create your router](#5-router).

| Mode                | Description                            |
|---------------------|----------------------------------------|
| out-in *(default)*  | Transition Out **THEN** In             |
| in-out              | Transition In **THEN** Out             |
| both                | Transition In **AND** Out              |

### 3. Views

Each view is an [ES6 Class](https://ponyfoo.com/articles/es6#classes) that extends the `Highway.View` one. It has a **serie of methods** to give you the ability to manage it along the process of the transition.  
Here are the list of these methods:

| Arguments                 | Description                                                        |
|---------------------------|--------------------------------------------------------------------|
| `View.onEnter()`          | Fire when the requested view is added to the `[router-wrapper]`    |
| `View.onLeave()`          | Fire when the previous view's `out` transition starts              |
| `View.onEnterCompleted()` | Fire when the requested view's `in` transition is over             |
| `View.onLeaveCompleted()` | Fire when the previous view is removed from the `[router-wrapper]` |

Besides, each view **needs a transition** your can define using the `transition` [getter](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/get) that will return your previously created transition as explained earlier.

Here is a **sample structure** of a view:

```javascript
// Import Highway
import Highway from 'path/to/highway.js';

// Import Transitions
import TransitionName from 'path/to/TransitionName.js'

// The View
class MyView extends Highway.View {
  get transition() {
    // The `transition getter (required)
    return TransitionName;
  }
  
  onEnter() {}
  onLeave() {}
  onEnterCompleted() {}
  onLeaveCompleted() {}
}

export default MyView;
```

### 4. Analytics

### 5. Router

## Examples

- [Fade](https://github.com/Anthodpnt/Highway/tree/master/examples/fade)

## Browser Support

## License

See the [LICENSE](https://github.com/Anthodpnt/Highway/blob/master/LICENSE.md) file for license rights and limitations (MIT).
