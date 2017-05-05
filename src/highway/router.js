/**
 * Highway - Router File:
 * This file contains the methods handling the routing our your pages. It works
 * in pair with the `view.js` file so never forget to add both of them in your
 * project directory since they depend on each other.
 * 
 * @author: Anthodpnt <antho.dpnt@gmail.com>
 * @version: 1.0.0
 */


class Router {
  /**
   * Constructor:
   * Construct the class and initialise it.
   * @param {object} options - The options
   */
  constructor(options) {
    // Attributes
    this.views = options.views;
    this.mode  = options.mode || 'out-in';
    this.stack = {};

    // Init
    this.init();
  }


  /**
   * Initialisation:
   * We initialise the attributes and the current page class.
   */
  init() {
    // Update Attributes
    const title = document.querySelector('title').innerHTML;
    const root  = document.querySelector('[namespace]');
    const name  = root.getAttribute('namespace');

    this.path = window.location.pathname;
    this.stack[this.path] = {
      title: title,
      root : root,
      name : name,
    };

    // Load Current View  
    this.current = new this.views[name](this.stack[this.path]);
    this.current.init();

    // Bind
    this.bind();
  }

  /**
   * Binding:
   * We create events we bind on DOM elements.
   */
  bind() {
    // Popstate
    if (!this.onPopstate) {
      // Create Event
      this.onPopstate = this.popstate.bind(this);

      // Add Events on Window
      window.addEventListener('popstate', this.onPopstate);
    }

    // Update
    if (!this.onUpdate) {
      // Get Links
      const links = document.querySelectorAll('[a[href]:not([disabled])]');

      // Create Events
      this.onUpdate = this.update.bind(this);

      // Add Events on DOM Links
      [].forEach.call(links, (el, i) => {
        el.addEventListener('click', this.onUpdate);
      });
    }
  }


  /**
   * Unbinding:
   * We remove events we bound on DOM elements.
   */
  unbind() {
    // Update
    if (this.onUpdate) {
      // Get Links
      const links = document.querySelectorAll('a[href]:not([disabled])');
      
      // Remove Events from DOM Links
      [].forEach.call(links, (el, i) => {
        el.removeEventListener('click', this.onUpdate);
      });

      // Clean up Events
      this.onUpdate = null;
    }
  }


  /**
   * Popstate:
   * We fetch the path from the history state on `popstate` event
   */
  popstate() {
    // Update Path
    this.path = window.location.pathname;

    // Fetch Path
    this.fetchCall();
  }


  /**
   * Update:
   * We check when window location updates
   * @param {object} event - The `click` event
   */
  update(event) {
    // Prevent event from Firing
    event.preventDefault();

    // Get Path
    const target = event.currentTarget;
    const path   = target.getAttribute('href');

    // We check if the current link redirects to a different page than the
    // displayed ones. If the two pages are different the script continues
    // otherwise the script stops.
    if (path !== this.path) {
      // Update Path
      this.path = path;

      // Push State in History
      window.history.pushState({ path: this.path }, '', this.path);

      // Fetch Path
      this.fetchCall();
    }
  }


  /**
   * Fetch:
   * We fetch the path.
   */
  fetchCall() {
    // We check if the path has been cached and we fetch it if not.
    if (!this.stack[this.path]) {
      fetch(this.path)
        .then((response) => response.text())
        .then((result) => this.fetchSuccess(result))
        .catch((error) => this.fetchError(error));
      return;
    }

    // Redirect
    this.redirect();
  }


  /**
   * Fetch Sucess:
   * We fetch update DOM on fetch success.
   * @param {string} result - The page HTML
   */
  fetchSuccess(result) {
    // Update Attributes
    const page  = document.createRange().createContextualFragment(result);
    const title = page.querySelector('title').innerHTML;
    const root  = page.querySelector('[namespace]'); 
    const name  = root.getAttribute('namespace');

    // Update History
    this.stack[this.path] = {
      title: title,
      root : root,
      name : name,
    };

    // Redirect
    this.redirect();
  }


  /**
   * Fetch Error:
   * We throw an error message on fetch error.
   * @param {string} error - The error to display
   */
  fetchError(error) {
    // Fetch Failed
    throw new Error(error);
  }


  /**
   * Redirect:
   * We update DOM with the page to display.
   */
  redirect() {
    const { name } = this.stack[this.path];

    // Update Previous/Current
    this.previous = this.current;
    this.current  = new this.views[name](this.stack[this.path]);

    // Load/Unload Views
    switch (this.mode) {
      case 'both':
        // Unload Previous
        this.previous.unload();
        this.unbind();

        // Load Current
        this.current.load();
        this.bind();
        break;
      case 'in-out':
        // Load Current
        this.current.load(() => {
          // Unload Previous
          this.previous.unload();
          this.unbind();
        });
        this.bind();
        break;
      default:
        // Unload Previous
        this.previous.unload(() => {
          // Load Current
          this.current.load();
          this.bind();
        });
        this.unbind();
    }
  }
}

// Export Class
export default Router;
