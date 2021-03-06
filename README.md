## Highway

Highway is a lightweight (**1.8kb** *minified and gzipped*), dependency-free and easy-to-use **Page Loader** written in **ES6**.

## Table of Contents

- [How it works](#how-it-works)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
	- [Attributes](#1-attributes)
	- [Transitions](#2-transitions)
	- [Views](#3-views)
	- [Analytics](#4-analytics)
	- [Loader](#5-loader)
- [Examples](#examples)
- [Browser Support](#browser-support)
- [Contributors](#contributors)
- [TO-DO](#to-do)
- [License](#license)

## How it works

Nowadays we are working hard everyday to make the Internet a more **creative** place. We have a countless number of technologies, techniques and as many tools to do so. Today, I would like to present you the next one you will use.

The default behavior of your browser reloading the page everytime the window location changes has been deprecated since a few years. Thanks to Ajax techniques we can now create awesome transitions between our pages, offering our users a better and more immersive experience.

Highway is a lightweight (**1.8kb** *minified and gzipped*), dependency-free and easy-to-use **Page Loader** written in **ES6**. It will never be so easy to add transitions to your websites. The only limit is **your imagination**.

Everytime the window location changes, the requested page/view will be loaded in **[Ajax](https://developer.mozilla.org/en-US/docs/AJAX)** using the **[Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API)**. This will give you the ability to add transitions between the current page/view and the requested one.

## Features

- Modern & lightweight
- Clean & extensible
- Setup in seconds
- Create views is so simple...
- ... Oh! And transitions as well
- Transition mode (out-in, in-out or both)
- Minimum HTTP Requests
- Cache pages/views
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
| `[loader-wrapper]`  | Contain Views    | N/A        | **YES**   |
| `[loader-view]`     | Contain View DOM | View Name  | **YES**   |
| `[loader-active]`   | Add Active Class | Class Name | **NO**    |
| `[loader-disabled]` | Disable Loader   | N/A        | **NO**    |

Here is a **sample structure** combining all these attributes:

```html
<main>
  <!-- Header - No transition -->
  <header>
    <ul>
      <li><a href="#" loader-active="is-active"></a></li>
      <li><a href="#" loader-active="is-active"></a></li>
      <li><a href="#" loader-disabled></a></li>
    </ul>
  </header>
	
  <!-- Loader Wrapper -->
  <div loader-wrapper>
    <!-- Loader View - Transition -->
    <div loader-view="my-view">
      <h1>My View</h1>
    </div>
  </div>
	
  <!-- Footer - No transition -->
  <footer></footer>
</main>
```
Note that the loader will be automatically **disabled** when `target="_blank"` and that **no transition** will apply on DOM elements **outside** the `[loader-wrapper]`. 

### 2. Transitions

Transitions are objects with `in` and `out` methods.  
These methods take two arguments given by the loader. **You don't even need to care about them but don't forget them**.

| Arguments  | Description                                                 |
|------------|-------------------------------------------------------------|
| `view`     | View's DOM you can use for your transitions                 |
| `done`     | Callback method you **must call** when transitions are over |

Here is a **sample structure** of a transition:

```javascript
const TransitionName = {
  in: (view, done) {
    // Transition In
  },
  out: (view, done) {
    // Transition Out
  },
};

export default TransitionName;
```

Your can find more [examples here](#examples).  
Besides you can set the **mode** of your transitions when you [create your loader](#5-loader).

| Mode                  | Description                            |
|-----------------------|----------------------------------------|
| `out-in` *(default)*  | Out Transition **THEN** In Transition  |
| `in-out`              | In Transition **THEN** Out Transition  |
| `both`                | In Transition **AND** Out Transition   |

### 3. Views

Each view is an [ES6 Class](https://ponyfoo.com/articles/es6#classes) that extends the `Highway.View` one. It has a **serie of methods** to give you the ability to manage it along the process of the transition.  
Here are the list of these methods:

| Arguments                 | Description                                                        |
|---------------------------|--------------------------------------------------------------------|
| `View.onEnter()`          | Fire when the requested view is added to the `[loader-wrapper]`    |
| `View.onLeave()`          | Fire when the previous view's `out` transition starts              |
| `View.onEnterCompleted()` | Fire when the requested view's `in` transition is over             |
| `View.onLeaveCompleted()` | Fire when the previous view is removed from the `[loader-wrapper]` |

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
    // The `transition` getter (required)
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

The `Highway.View` has an `analytics` method that is extended to all your views.  
This method send a new `pageview` event to Google Analytics when your view's `in` transition is over and **only if you have specified** a GA script tag in the `head` of your website.

```javascript
// [...]
  analytics() {
    // Send Page View to GA
    if (typeof ga !== 'undefined') {
      ga('set', { page: window.location.pathname, title: document.title });
      ga('send', 'pageview');
    }
  }
// [...]
```
Note that this method can be overwritten in your view class if you need to change the code in order to fit your needs.  
This can be done like so:

``` javascript
// [...]
class MyView extends Highway.View {
  // [...]
  analytics() {
    // Keep this line if you want to keep the default code and add more code 
    // beneath it. If you don't want to keep the default code and completely
    // overwrite the method, you can remove this line.
    super.analytics();
    
    // Add your code here
  }
  // [...]
}
// [...]
```

### 5. Loader

Now your know how to create [your views](#3-views) and [your transitions](#2-transitions) so let me explain you **how to create the loader itself**. This is quite simple, all you need to do is create a new instance of the `Highway.Loader`. It takes an **object** as only parameter with these values:

| Value                     | Type            | Description                                      |
|---------------------------|-----------------|--------------------------------------------------|
| `views`                   | `object`        | The list of views (`[name]:[class]`)            |
| `mode`                    | `string`        | The transition mode (`out-in`, `in-out`, `both`) |

Note that the `[name]` in the `views` object refers to the value you passed to the `[loader-view]` and the `[class]` refers to your view class.

Here is a **sample code** to instanciate your loader:

```javascript
// Import Highway
import Highway from 'path/to/highway.js';

// Import Views
import MyView from 'path/to/MyView.js';

class App {
  constructor() {
    // Create the Loader
    this.Loader = new Highway.Loader({
      views: {
        'my-view': MyView,
      },
      mode: 'both',
    });
  }
}

new App();
```

## Examples

- [Fade](https://github.com/Anthodpnt/Highway/tree/master/examples/fade)

## Browser Support

Highway supports modern browser supporting these features:
- Fetch API ([Caniuse](https://caniuse.com/#feat=fetch))
- Promises ([Caniuse](https://caniuse.com/#feat=promises))

For older browsers there are plenty of **polyfills**, these are my favorites:
- [Fetch API](https://github.com/github/fetch)
- [Promises](https://babeljs.io/docs/usage/polyfill/)

## Contributors

- [Anthodpnt](https://github.com/Anthodpnt) - Owner - [Twitter](https://twitter.com/Anthodpnt)
- [fabricelejeune](https://github.com/fabricelejeune) - Support & Advices - [Twitter](https://twitter.com/fabricelejeune)

## TO-DO
- [ ] Create Github Page
- [ ] Add Live Demos
- [ ] Unit Tests

## License

See the [LICENSE](https://github.com/Anthodpnt/Highway/blob/master/LICENSE.md) file for license rights and limitations (MIT).
