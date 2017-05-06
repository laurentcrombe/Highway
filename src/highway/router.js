/**
 * Highway - Router File:
 * This file contains the methods handling the routing of your pages.
 * 
 * @author: Anthodpnt <antho.dpnt@gmail.com>
 * @version: 1.0.0
 */


class Router {
  /**
   * Constructor:
   * Construct the Router, initialise it and extract options.
   * 
   * @param {object} options - The Options
   */
  constructor(options) {
    // Options
    this.views = options.views;
    this.mode  = options.mode || 'out-in';

    // Events
    this.onPopstate   = this.popstate.bind(this);
    this.onPathChange = this.change.bind(this);

    // PopState
    window.addEventListener('popstate', this.onPopstate);

    // Init
    this.bind();
    this.init();
  }


  /**
   * Initialisation:
   * When landing on the website the first page does'nt pass through the router
   * so we need to initialise it as well as the attributes of our router.
   */
  init() {
    // Attributes
    const title = document.querySelector('title').innerHTML;
    const view  = document.querySelector('[router-view]');
    const name  = view.getAttribute('router-view');

    this.path  = window.location.pathname;
    this.stack = {};
    this.stack[this.path] = {
      title: title,
      view : view,
      name : name,
    };

    // Load Current  
    this.current = new this.views[name](this.stack[this.path]);
    this.current.init();

    // Active
    for (let link of this.links) {
      if (link.pathname === this.path) {
        this.active(link);
      }
    }
  }


  /**
   * Binding:
   * We create events we bind on DOM elements.
   */
  bind() {
    // Get Links
    this.links = document.querySelectorAll('a:not([router-disabled])');

    // Add Events on DOM Links
    for (let link of this.links) {
      link.addEventListener('click', this.onPathChange);
      link.addEventListener('touchstart', this.onPathChange);
    }
  }


  /**
   * Unbinding:
   * We remove events we bound on DOM elements.
   */
  unbind() {
    // Remove Events from DOM Links
    for (let link of this.links) {
      link.removeEventListener('click', this.onPathChange);
      link.removeEventListener('touchstart', this.onPathChange);
    }
  }


  /**
   * Popstate:
   * We fetch the path from the window location on `popstate` event
   */
  popstate() {
    // Update Path
    this.path = window.location.pathname;

    // Fetch Path
    this.fetchCall();
  }


  /**
   * Active:
   * Set active classnames on elements and remove previous active classname.
   * 
   * @param {object} el - The Element
   */
  active(el) {
    const classname = el.getAttribute('router-active');

    if (classname) {
      if (this.HTMLActive) {
        const classname = this.HTMLActive.getAttribute('router-active');
        this.HTMLActive.classList.remove(classname);
      }

      this.HTMLActive = el;
      this.HTMLActive.classList.add(classname);
    }
  }


  /**
   * Change:
   * We check when path changes on link `click` event 
   * 
   * @param {object} event - The `click` Event
   */
  change(event) {
    // Prevent event from firing
    event = event || window.event;
    if (event.preventDefault) {
      event.preventDefault();
    }
    event.returnValue = false;
    
    // Attributes
    const link   = event.currentTarget;
    const path   = link.getAttribute('href');
    const target = link.getAttribute('target');

    // We check if the current link target should open in a new blank window.
    // If the target is set to `_blank` the script stops otherwise it continues.
    if (target === '_blank') {
      // Open New Window
      return window.open(path, '_blank');
    }

    // Update
    this.update(path);
  }


  /**
   * Update:
   * We check when path updates.
   * 
   * @param {string} path - The Path
   */
  update(path) {
    // We check if the current link redirects to a different page than the
    // displayed one. If the two pages are different the script continues
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
   * 
   * @param {string} result - The Page HTML
   */
  fetchSuccess(result) {
    // Update Attributes
    const page  = document.createRange().createContextualFragment(result);
    const title = page.querySelector('title').innerHTML;
    const view  = page.querySelector('[router-view]'); 
    const name  = view.getAttribute('router-view');

    // Update Stack
    this.stack[this.path] = {
      title: title,
      view : view,
      name : name,
    };

    // Redirect
    this.redirect();
  }


  /**
   * Fetch Error:
   * We throw an error message on fetch error.
   * 
   * @param {string} error - The Error
   */
  fetchError(error) {
    throw Error(error);
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

    // Unbind Events
    this.unbind();

    // Load/Unload Views
    switch (this.mode) {
      // Both:
      // Previous and current transitions run at the same time.
      case 'both':
        this.current.load();
        this.previous.unload()
          .then(this.bind)
          .catch((e) => { 
            throw Error(e);
          });
        break;
      
      // In-Out:
      // Previous transition runs after current transition is over.
      case 'in-out':
        this.current.load()
          .then(() => this.previous.unload())
          .then(() => this.bind())
          .catch((e) => {
            throw Error(e);
          });
        break;

      // Out-In:
      // Current transition runs after previous transition is over (default).
      default:
        this.previous.unload()
          .then(() => this.current.load())
          .then(() => this.bind())
          .catch((e) => {
            throw Error(e);
          });
    }
  }
}

// Export Class
export default Router;
