import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import zlib from 'zlib'
import { promisify } from 'node:util';
import { pipeline } from 'stream'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const decompress = async () => {

    const unzip = zlib.createUnzip();  
    const rootPath = (nameFile) => path.resolve(__dirname, 'files', nameFile)
    const inp = fs.createReadStream(rootPath('archive.gz'));  
    const out = fs.createWriteStream(rootPath('fileToCompress.txt'));  
    inp.pipe(unzip).pipe(out).on('finish', () => {
        fs.rm(rootPath('archive.gz'), (err) => {})
    })
    
    // Write your code here 
};

await decompress();