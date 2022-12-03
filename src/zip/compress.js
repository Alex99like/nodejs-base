import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import zlib from 'zlib'
import { promisify } from 'node:util';
import { pipeline } from 'stream'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compress = async () => {
    
    const pipe = promisify(pipeline);
    const rootPath = (nameFile) => path.resolve(__dirname, 'files', nameFile)
    fs.stat(rootPath('fileToCompress.txt'), async (err) => {
        if (err) throw new Error('Failed operation!')

        const gzip = zlib.createGzip();
        const source = fs.createReadStream(rootPath('fileToCompress.txt'));
        const destination = fs.createWriteStream(rootPath('archive.gz'));
        await pipe(source, gzip, destination);
        fs.rm(rootPath('fileToCompress.txt'), (err) => {})
    })
    // Write your code here 
};

await compress();