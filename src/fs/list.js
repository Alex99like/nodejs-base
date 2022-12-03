import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const list = async () => {
    try {
        const list = await fs.readdir(path.resolve(__dirname, 'files'))
        console.log(list)
    } catch(e) {
        throw new Error('FS operation failed')
    }
    
};

await list();