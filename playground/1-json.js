const fs = require('fs')

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataFile = fs.readFileSync('1-json.json')
const dataJSON = JSON.parse(dataFile)
dataJSON.name = "Santiago"
const dataString = JSON.stringify(dataJSON)
console.log(dataString)
fs.writeFileSync('1-json.json', dataString)