// Highway
import Highway from 'highway';

// Transition
import Fade from '../transitions/fade';

class Page extends Highway.View {
  get transition() {
    return Fade;
  }

  onEnter() {}
  onLeave() {}
  onEnterCompleted() {}
  onLeaveCompleted() {}  
}

export default Page;