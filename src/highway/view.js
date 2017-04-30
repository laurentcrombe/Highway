/**
 * Highway - View File:
 * This file contains the methods handling the display of your pages. It works
 * in pair with the `index.js` file so never forget to add both of them in your
 * project directory since they depend on each other.
 * 
 * @author: Anthodpnt <antho.dpnt@gmail.com>
 * @version: 1.0.0
 */


class View {
  /**
   * Constructor:
   * Construct the class.
   * @param {object} options - The options
   */
  constructor(options) {
    // Check Transition
    if (typeof this.transition === 'undefined') {
      throw new Error('Undefined Transitions');
    }

    // Get Options
    this.title = options.title;
    this.root  = options.root;
    this.name  = options.name;

    // Get Datas
    this.wrapper = document.querySelector('.router-wrapper');
  }


  /**
   * Initialisation:
   * We call the enter completed method.
   */
  init() {
    // Enter Completed
    this.onEnterCompleted();
  }


  /**
   * Append:
   * We append the view to DOM.
   */
  append() {
    // Update Title
    document.title = this.title;

    // Append
    this.wrapper.appendChild(this.root);
  }


  /**
   * Remove:
   * We remove the view from DOM.
   */
  remove() {
    // Remove
    this.wrapper.removeChild(this.root);

    // Leave Completed
    this.onLeaveCompleted();
  }


  /**
   * Load:
   * We load the view.
   * @param {function} callback - The callback function
   */
  load(callback) {
    // Enter
    this.onEnter();

    // Append
    this.append();

    // Transition In
    this.tIn = new Promise((resolve, reject) => {
      if (!this.transition.in) {
        reject();
        return;
      }
      this.transition.in(this.root, resolve);
    });

    this.tIn
      .then(this.init.bind(this))
      .then(this.analytics.bind(this))
      .then(callback)
      .catch(() => {
        throw new Error('Undefined Transition In');
      });
  }


  /**
   * Unload:
   * We unload the view.
   * @param {function} callback - The callback function
   */
  unload(callback) {
    // Leave
    this.onLeave();

    // Transition Out
    this.tOut = new Promise((resolve, reject) => {
      if (!this.transition.out) {
        reject();
        return;
      }
      this.transition.out(this.root, resolve);
    });

    this.tOut
      .then(this.remove.bind(this))
      .then(callback)
      .catch(() => {
        throw new Error('Undefined Transition Out');
      });
  }


  /**
   * Analytics:
   * We update GA if the script exists.
   */
  analytics() {
    // Send Page View to GA if enabled
    if (typeof ga !== 'undefined') {
      ga('set', { page: window.location.pathname, title: document.title });
      ga('send', 'pageview');
    }
  }
}


// Export Class
export default HighwayView;
