import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const remove = async () => {
    const rootPath = (file) => path.resolve(__dirname, 'files', file)
    try {
        await fs.rm(rootPath('fileToRemove.txt'))
    } catch(e) {
        throw new Error('FS operation failed')
    }
    // Write your code here 
};

await remove();