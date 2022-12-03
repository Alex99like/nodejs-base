import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import process from 'process'
import thread from 'worker_threads'
import cp from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const spawnChildProcess = async (args) => {
    cp.fork(path.resolve(__dirname, 'files', 'script.js'), process.argv)
    // Write your code here
};

spawnChildProcess();