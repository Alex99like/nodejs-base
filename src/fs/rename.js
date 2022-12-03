import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rename = async () => {
    const rootPath = (file) => path.resolve(__dirname, 'files', file)
    try {
        await fs.rename(rootPath('wrongFilename.txt'), rootPath('properFilename.md'))
    } catch(e) {
        throw new Error('FS operation failed')
    }
    // Write your code here 
};

await rename();