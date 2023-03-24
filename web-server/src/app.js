const express = require('express')

const app = express()

console.log(__dirname)
console.log(__filename)

const path = require('path')
app.use(express.static(path.join(__dirname, '../public')))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})

// app.get('/help', (req, res) => {
//     res.send('Help')
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })

app.get('/weather', (req, res) => {
    res.send({
        location: 'Buenos Aires',
        forecast: 'Soleado, 32 grados'
    })
})

app.listen(3000,() => {
    console.log('Server running in port 3000')
})