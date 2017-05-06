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

Highway needs some **custom attributes** on your DOM elements to work properly.  
Here are these attributes and how to use them to setup your DOM:

**`[router-wrapper]`**

Everytime `window.location` changes, Highway starts transitions and looks for the `[router-wrapper]` DOM element to find the `[router-view]` to remove and to append the one to display.

The `[router-wrapper]` DOM element is **required**.

```html
<div router-wrapper></div>
```

**`[router-view]`**

The `[router-view]` DOM element should **always be inside** the `[router-wrapper]`.  
Everything contained in the `[router-view]` DOM element will be removed or appended on `window.location` change.
 
The `[router-view]` DOM element is **required** and takes **the name** of the view as value.

```html
<div router-wrapper>
  <div router-view="my-view"></div>
</div>
``` 

**`[router-active]`**

The `[router-active]` attribute can be set on `<a>` DOM elements that needs an **active classname** when clicked.  
The `[router-active]` attribute is **optional** and takes **the classname** to apply as value.

```html
<!-- Will apply `is-active` classname on click -->
<a href="#" router-active="is-active"></a>
``` 

**`[router-disabled]`**

Every `<a>` DOM element is a candidate to start the router. But you can disable the router on specific links with the `[router-disabled]` attribute.

The `[router-disabled]` attribute is **optional**.

```html
<!-- Will disable router -->
<a href="#" router-disabled></a>
```

Note that the router will be automatically **disabled** when `target="_blank"`.

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

### Transitions

Transition are objects with `in` and `out` methods.  
These methods take arguments given by the router. You don't even need to care about them but don't forget them.

- `el`: This is the view to transition.
- `completed`: This is the callback method you **must call** when transition is done.

```js
const TransitionName = {
  in: (el, complete) {
  	// Transition In
  },
  out: (el, complete) {
  	// Transition Out
  },
};

export default TransitionName;
```

Your can find more [examples here](#examples).  
Besides Highway gives you a way to choose the **mode** of your transitions that you can set when you [create your router](#router).

| Mode              | Description                |
|:-----------------:|:--------------------------:|
| out-in (default)  | Transition Out **THEN** In |
| in-out            | Transition In **THEN** Out |
| both              | Transition In **AND** Out  |

### Views

`View.onEnter()`

`View.onLeave()`

`View.onEnterCompleted()`

`View.onLeaveCompleted()`

### Analytics

### Router

## Examples

- [Fade](https://github.com/Anthodpnt/Highway/tree/master/examples/fade)

## License

See the [LICENSE](https://github.com/Anthodpnt/Highway/blob/master/LICENSE.md) file for license rights and limitations (MIT).