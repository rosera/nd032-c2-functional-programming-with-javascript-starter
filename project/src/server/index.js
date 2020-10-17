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

// Apod API call
// Todo: Review - Use one function to call NASA API
// Todo: Review - Use manifest to determine MAX_SOL
app.get('/mars/:roverID', async (req, res) => {
    try {
      let rover = req.params.roverID;

      // Call the manifest first to get the SOL setting
      let manifest = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${req.params.roverID}?api_key=${process.env.API_KEY}`)
        .then(res => res.json())

      // Display the max sol for the Rover
      console.log(`MAX SOL: ${manifest.photo_manifest.max_sol}`);

      let MAX_SOL =  manifest.photo_manifest.max_sol;

      // Call Rover API
      let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${req.params.roverID}/photos?sol=${MAX_SOL}&api_key=${process.env.API_KEY}`)
        .then(res => res.json())
        res.send({ response })
    } catch (err) {
        console.log('error:', err);
    }
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
