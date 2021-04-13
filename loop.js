// node myFile.js

const pendingTimers = [];
const pendingTasks = [];
const pendingOps = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

// Check one -> Any pending timeout, interval ou immediate
// Check two -> Any pending OS tasks? (Server listening to port)
// Check three -> Any pending long running operations? (like FS modules)
const shouldContinue = () => pendingTimers.length || pendingTasks.length || pendingOps.length;

// 1 iteration = 1 tick
while (shouldContinue()) {
  // Node looks at pending timers and sees if anything
  // should be called

  // Node looks at pending tasks and pending operations and
  // executes callbacks

  // Pauses execution. Continue when...
  // - New Task is done
  // - New Operation is done
  // - A timer is about to complete

  // Looks at pending timers for setImmediate exclusively

  // Handle 'close' events
}

// Exits to terminal
