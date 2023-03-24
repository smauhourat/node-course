const express = require('express')

const app = express()

console.log(__dirname)
console.log(__filename)

const path = require('path')
app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Santiago'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Santiago'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is a example message'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Buenos Aires',
        forecast: 'Soleado, 32 grados'
    })
})

app.listen(3000,() => {
    console.log('Server running in port 3000')
})