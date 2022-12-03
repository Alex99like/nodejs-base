import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {
    try {
        const rootPath = (file) => path.resolve(__dirname, 'files', file)
        const file = await fs.readFile(rootPath('fileToRead.txt'), { encoding: 'utf-8' })
        console.log(file)
    } catch(e) {
        throw new Error('FS operation failed')
    }
    // Write your code here 
};

await read();