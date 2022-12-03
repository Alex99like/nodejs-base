import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import process from 'process'
import { Stream, Transform } from 'stream'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class ToReversStream extends Transform {
    _transform(chunk, encoding, callback) {
        try {
          const resultString = `${chunk.toString('utf8').split('').reverse().join('')}`;
          
          callback(null, resultString);
        } catch (err) {
          callback(err);
        }
      }
}

const transform = async () => {
    process.stdin.pipe(new ToReversStream().on('data', (data) => {
        process.stdout.write(data + '\n')
    }))
    // Write your code here 
};

await transform();