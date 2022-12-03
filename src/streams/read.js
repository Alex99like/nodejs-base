import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import process from 'process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {

    const rs = fs.createReadStream(path.resolve(__dirname, 'files', 'fileToRead.txt'))
    rs.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};

await read();