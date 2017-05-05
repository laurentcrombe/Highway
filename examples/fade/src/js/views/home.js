// Highway
import Highway from 'highway';

// Transition
import Fade from '../transitions/fade';

class Home extends Highway.View {
  get transition() {
    return Fade;
  }

  onEnter() {}
  onLeave() {}
  onEnterCompleted() {}
  onLeaveCompleted() {}  
}

export default Home;