/**
 * Transition - Base:
 * Basic transition using `TweenMax`. Notice`TweenMax` is not required in this 
 * file simply because it should be required in your main file and not in
 * transitions files.
 * 
 * @author: Anthodpnt <antho.dpnt@gmail.com>
 * @version: 1.0.0
 */


const Base = {
  in: (el, complete) => {
    TweenMax.set(el, 
      { alpha: 1.0, onComplete: complete },
    );
  },
  out: (el, complete) => {
    TweenMax.set(el, 
      { alpha: 0.0, onComplete: complete },
    );
  }
};

export default Base;