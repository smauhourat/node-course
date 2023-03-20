const request = require('postman-request')

const geocode = (address, callback) => {
    const url = "https://api.radar.io/v1/geocode/forward?query=" + address
    const auth_api = "prj_test_pk_7dc5278af7990f2c961f721ad0b8d8078a854f78"

    request({ url: url, json: true, headers: { 'Authorization': auth_api } }, (error, response, body) => {
        if (error) {
            callback('Network error', undefined)
        } else if (body.addresses.length == 0) {
            callback('Service currently not available', undefined)
        } else {
            const latitude = body.addresses[0].latitude
            const longitude = body.addresses[0].longitude
            const location = body.addresses[0].formattedAddress
            callback(undefined, {
                latitude,
                longitude,
                location
            })
        }
    })
}

module.exports = geocode