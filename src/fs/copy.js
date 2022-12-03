import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const copy = async () => {
    const rootPath = path.resolve(__dirname, 'files')
    const copyFiles = path.resolve(__dirname, 'files_copy')
    
    try {
        await fs.readdir(rootPath)
        await fs.mkdir(copyFiles)
        const data = await fs.readdir(rootPath)
        for await (const item of data) fs.copyFile(path.resolve(rootPath, item), path.resolve(copyFiles, item))
    } catch(e) {
        throw new Error('FS operation failed')
    }
};

await copy();