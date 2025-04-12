let arr = Array.from({ length: 3 }, () => Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)))
process.stdout.write(`${JSON.stringify(arr)}\n`)