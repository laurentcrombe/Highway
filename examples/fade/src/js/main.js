// Dependencies
import Highway from 'highway';
import TweenMax from 'gsap';

// Views
import Home from 'views/home';
import Page from 'views/page';

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

new App();