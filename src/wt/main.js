import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import process from 'process'
import os from 'os'
import threads from 'worker_threads'
import events from 'events'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const performCalculations = async () => {

    const res = []
    os.cpus().forEach((el, i, arr) => {
        const work = new threads.Worker(path.resolve(__dirname, 'worker.js'), {
            workerData: i + 10,
        })
        work.on('message', (data) => {
            res.push({ status: data && data !== null ? 'resolved' : 'error' , data })
            if (os.cpus().length === res.length) console.log(res)
        })
    })
    
};

await performCalculations();