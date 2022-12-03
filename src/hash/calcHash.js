import { fileURLToPath } from 'url'
import path from 'path'
import crypto from 'crypto'
import fs from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const calculateHash = async () => {
    const file = await fs.readFile(path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt'), {encoding: 'utf8'})
    const hash = crypto.createHash('sha256')
        .update(file)
        .digest('hex');
        console.log(hash);
};

await calculateHash();