const { parentPort, workerData } = require('worker_threads')

parentPort.once('message', (event) => {
    const sharedArray = event.data;
    const index = event.index;
    //retrieve value from sharedArray in memory using index
    const inputValue = Atomics.load(sharedArray, index);
    const fiboValue = calculateFibonacci(inputValue)
    parentPort.postMessage(fiboValue)
})

//function to calculate fibonacci
const calculateFibonacci = (num) => {
    let a = 0,
        b = 1,
        temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;

}