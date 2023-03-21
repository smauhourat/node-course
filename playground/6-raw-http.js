const http = require('http')

const url = "http://api.weatherstack.com/forecast?access_key=6962c0c3606eb129fae12c0b74417542&query=40,-75"


const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        console.log(JSON.parse(data))
    })

})

request.on('error', (error) => {
    console.log('An ERROR', error)
})

request.end()