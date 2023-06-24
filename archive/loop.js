// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperation = [];

// New timers, tasks , operations are recorded from myFile running
myFile.runCode();

function shouldContinue() {
  // check 1 : any pending setTimeout, setInterval , setImmediate ?
  // check 2 : any pending os tasks? (Like server listening to port)
  // check 3 : any pending long running operations ? (Like fs module)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperation.length
  );
}

// Entire body executes in one 'tick'
while (shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any functions are ready to be called
  // 2) Node looks at pendingOSTasks and pendingOperations and called relevant callbacks
  // 3) Pause execution. Continue when..
  //    - a new pendingOSTask is done
  //    - a new PendingOpeartions
  // 4) Look at pendingTimers. Call any setImmediate
  // 5) Handle any 'close' events
}

// exit back to terminal
