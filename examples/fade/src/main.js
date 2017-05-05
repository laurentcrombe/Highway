// Highway
import Highway from 'highway';

// Views
import Home from './views/home';
import Page from './views/page';

// App
class App {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      new Highway.Router({
        views: {
          'home': Home,
          'page': Page,
        },
      });
    });
  }
}

// DOM Ready
(() => {
  const a = new App();
})();