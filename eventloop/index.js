/*
As we know javascript is an asynchronous single threaded language. 
This asynchronous nature makes the js very fast and scalable. It relies on
something called eventloop for it's async nature. An event loop consists of 
3 main parts `Call stack`, `Node APIs`, `Callback queue`

- call stack handles the synchronous part. 
- Node API's handle the requests related
to files, streams etc.
- Callback queue is used for handling asynchronous part like setTimeout, setIntervals etc.
This queue is further divided into two parts `micro queue` and `macro queue`. Micro queue has priority 
over macro queue and is used to handle `Promises` whereas `setTimeout`, setInterval is handled by macro queue.

There are 6 phases in event loop execution
- timers: callbacks scheduled by setTimeout and setInterval are executed during this phase
- pending callbacks: I/O callbacks that were previously deferred to the next loop iteration are executed during this phase
- idle, prepare: this phase is only used internally by Node.js
- polling: new I/O events are retrieved and I/O callbacks are executed during this phase (except for callbacks scheduled by timers, callbacks scheduled by setImmediate, and close callbacks, because those are all handled in different phases)
- check: callbacks scheduled by setImmediate are executed during this phase
- close callbacks: cleanup, garbage collection etc is done in this phase. Ex. closing socket connection.
*/

const initGame = () => {
    console.log('Game has started!')
}

//to put CBs in microQueue
process.nextTick(initGame)
console.log('Console log 1')

//to put CBs in promise queue
Promise.resolve().then(() => {
    console.log('Player created!!')
})

console.log('Console log 2')