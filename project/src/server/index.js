require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')

const app = express()
const port = 8080 || process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../public')))

// your API calls

// Apod API call
app.get('/apod', async (req, res) => {
    try {
        let image = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
            .then(res => res.json())
        res.send({ image })
    } catch (err) {
        console.log('error:', err);
    }
})

// Rover Curiosity: API call
app.get('/curiosity', async (req, res) => {
    try {
        // Make the API call using the API Key
        let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2912&api_key=${process.env.API_KEY}`)
            .then(res => { return res.json() })
        // Return an object named response
        res.send({ response })
    } catch (err) {
        console.log('error:', err);
    }
})

// Rover Curiosity: API call
app.get('/opportunity', async (req, res) => {
    try {
        // Make the API call using the API Key - Check the manifest for the latest photos (i.e. MAX sol date)
        let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=5111&api_key=${process.env.API_KEY}`)
            .then(res => { return res.json() })
        // Return an object named response
        res.send({ response })
    } catch (err) {
        console.log('error:', err);
    }
})

// Rover Curiosity: API call
app.get('/spirit', async (req, res) => {
    try {
        // Make the API call using the API Key - Check the manifest for the latest photos (i.e. MAX sol date)
        let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=2208&api_key=${process.env.API_KEY}`)
            .then(res => { return res.json() })
        // Return an object named response
        res.send({ response })
    } catch (err) {
        console.log('error:', err);
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
