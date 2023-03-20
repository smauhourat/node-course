const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// geocode('Buenos Aires', (error, data) => {
//     console.log('Error:', error)
//     console.log('Data:', data)
// })

// geocode('8a76sda6s8a7sd867a', (error, data) => {
//     console.log('Error:', error)
//     console.log('Data:', data)
// })


// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })

// forecast(-34.607357,-58.454595, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })  
  
// forecast(999999999,99999999999, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })  


const address = process.argv[2]

if (!address) {
    return console.log('Please provide a valid address')
} else {
    geocode(process.argv[2], (error, data) => {
        if (error) {
            return console.log(error)
        }
    
        forecast(data.latitude,data.longitude, (error, data) => {
            if (error)
                return console.log(error)
            
            console.log(data)
        })          
    })
}
