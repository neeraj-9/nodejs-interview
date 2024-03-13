const { Worker } = require('worker_threads')

const findFibonacciValues = (nums) => {
    const length = nums.length;
    const size = Int32Array.BYTES_PER_ELEMENT * length;
    //create a sharedArrayBuffer of size of input array
    const sharedBuffer = new SharedArrayBuffer(size)
    const sharedArray = new Int32Array(sharedBuffer);

    for (let i = 0; i < length; i++) {
        //store values in the sharedArray safely with Atomics
        Atomics.store(sharedArray, i, nums[i]);

        const worker = new Worker(`${__dirname}/worker.js`)
        worker.once('message', (message) => {
            console.log(`Result for input:${nums[i]} --> ${message} `)
        })

        worker.postMessage({ data: sharedArray, index: i })
    }
}

findFibonacciValues([50, 34, 21, 4, 10])