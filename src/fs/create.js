import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const create = async () => {
    const rootPath = path.resolve(__dirname, 'files', 'fresh.txt')
    fs.stat(rootPath, (err) => {
        if (err) {
            fs.writeFile(rootPath, 'I am fresh and young', (err) => {})
        } else {
            throw new Error('FS operation failed')
        }
    })
};

await create();