import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import process from 'process'
import threads from 'worker_threads'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const res = nthFibonacci(threads.workerData)
    threads.parentPort.postMessage(res || null)


    
    // This function sends result of nthFibonacci computations to main thread
};



sendResult();