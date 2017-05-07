/**
 * Highway - View File:
 * This file contains the methods handling the display of your pages.
 * 
 * @author: Anthodpnt <antho.dpnt@gmail.com>
 * @version: 1.0.0
 */


class View {
  /**
   * Constructor:
   * Construct the View, get the `router-wrapper` and extract options.
   * 
   * @param {object} options - The options
   */
  constructor(options) {
    // Wrapper
    this.wrapper = document.querySelector('[router-wrapper]');

    // Options
    this.title = options.title;
    this.view = options.view;
  }


  /**
   * Initialisation:
   * We call the enter completed method. This is usefull for the landing page
   * that does not pass through the router.
   */
  init() {
    // Enter Completed
    if (this.onEnterCompleted) {
      this.onEnterCompleted();
    }
  }


  /**
   * Append:
   * We append the view content to the `router-wrapper` and we update the page
   * title. 
   */
  append() {
    // Update Title
    document.title = this.title;

    // Append
    this.wrapper.appendChild(this.view);
  }


  /**
   * Remove:
   * We remove the view content from the `router-wrapper`.
   */
  remove() {
    // Remove
    this.wrapper.removeChild(this.view);
  }


  /**
   * Load:
   * We load the view content and call the transition `in`. Analytics are 
   * updated as well if the GA script has been setup.
   */
  load() {
    // Enter
    if (this.onEnter) {
      this.onEnter();
    }

    // Append
    this.append();

    // Promise for Async methods
    return new Promise((resolve, reject) => {
      // Transition
      this.transition.in(this.view, () => {
        // Resolve
        resolve();

        // Send GA
        this.analytics();

        // Enter Completed
        if (this.onEnterCompleted) {
          this.onEnterCompleted();
        }
      });
    });
  }


  /**
   * Unload:
   * We unload the view content and call the transition `out`.
   */
  unload() {
    // Leave
    if (this.onLeave) {
      this.onLeave();
    }

    // Promise for Async methods
    return new Promise((resolve, reject) => {
      // Transition
      this.transition.out(this.view, () => {
        // Resolve
        resolve();

        // Remove
        this.remove();

        // Leave Completed
        if (this.onLeaveCompleted) {
          this.onLeaveCompleted();
        }
      });
    });
  }


  /**
   * Analytics:
   * We update GA if the script has been setup.
   */
  analytics() {
    // Send Page View to GA
    if (typeof ga !== 'undefined') {
      ga('set', { page: window.location.pathname, title: document.title });
      ga('send', 'pageview');
    }
  }
}


// Export Class
export default View;
