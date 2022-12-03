import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import process from 'process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const write = async () => {

    process.stdin.on('data', (chunk) => {
        const writeStream = fs.createWriteStream(path.resolve(__dirname, 'files', 'fileToWrite.txt'), 'utf-8')
        writeStream.write(chunk)
    })
};

await write();