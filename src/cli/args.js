import process from 'process'

const parseArgs = () => {
    const argv = process.argv.slice(2)
    argv.forEach((el, i, arr) => {
        if (el.startsWith('--')) {
            console.log(`${el} is ${arr[i + 1]},`)
        }
    })
    // Write your code here 
};

parseArgs();