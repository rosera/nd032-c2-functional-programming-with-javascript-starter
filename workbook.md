# Workbook

- [x] Fork the original [Mars Dashboard Repo](https://github.com/udacity/nd032-c2-functional-programming-with-javascript-starter.git)
- [x] Ensure `yarn` is available on the development machine
- [ ] Get a [NASA developer API key](https://api.nasa.gov/)

# Task 1 - [Initialise the environment](https://github.com/rosera/nd032-c2-functional-programming-with-javascript-starter/blob/project/task-one.md)

- [x] Download the code
- [x] Switch to the branch `project`
- [x] Change to the sub-directory `project`
- [x] Amend the NASA API_KEY
- [x] Rename `nd032-c2-functional-programming-with-javascript-starter/project/.env-sample` environment file to `.env`
- [x] Change demo key to `DEMO_KEY`
- [x] Initialise yarn
- [x] Test the application

# Task 2 - [Architecture](https://github.com/rosera/nd032-c2-functional-programming-with-javascript-starter/blob/project/task-two.md)

- [x] Breakdown the architecture
- [x] Draw a diagram overview
- [x] Change application port
- [x] Set up button onscreen

# Task 3 - [Add a new Express Route]()

- [x] Update the diagram for the new architecture
- [x] Add a route for the Rover API
- [x] Test the new route

![Index.js Overview](https://github.com/rosera/nd032-c2-functional-programming-with-javascript-starter/blob/project/images/task_3_route_arch.png "Route Architecture")


# Task 4 - [Add Rover functionality]()
- [x] Reuse the existing code hierarchy of client.js
- [x] Mirror the original apod route code
- [x] Added renderRover, AppRover functions
- [x] Put some test html onscreen using the functions

![Updated Architecture](https://github.com/rosera/nd032-c2-functional-programming-with-javascript-starter/blob/project/images/task_4_architecture.png "Updated Architecture")


# Task 5- [Update Client.js - Onscreen display and fetch]()
- [x] Retrieve information using fetch API
- [x] Display information from the fetch API
- [x] Add console.log/onscreen info to show Rover fetch
- [x] Test the fetch - show information/parse information

![Fetch Architecture](https://github.com/rosera/nd032-c2-functional-programming-with-javascript-starter/blob/project/images/task_5_architecture.png "Fetch Architecture")

# Task 6- [Rover fetch]()
- [x] Update the fetch to use the Rover route
- [x] Update the application to use the Rover object

# Task 7- [Fetch Async/Await]()

- [x] Duplicate the updateStore function to call the renderRover function

![Fetch Update Architecture](https://github.com/rosera/nd032-c2-functional-programming-with-javascript-starter/blob/project/images/task_7_architecture.png "Add UpdateStoreRover Function")

- [x] Update the server/index.js to `return the json data`

* response object holds the res.json value - line 3
* Changed the fetch to return the res.json - line 4
* pass the response variable back as an object i.e enclose in braces - line 8

```
    1 app.get('/rover', async (req, res) => {
    2     try {
    3         let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.API_KEY}`)
    4             .then(res => { return res.json() })
    5
    6         console.log(`Response: ${response.photos[0].id}`)  
    7    
    8         res.send({ response })   
    9     } catch (err) {
   10         console.log('error:', err);
   11     }
   12 })     
```

- [x] Update the public/client.js

* add new variable mars - line 2
* Retrieve a json object - line 5
* update the store with the reponse object appended to mars - 6

```
  1 const getImageOfTheDayRover = (state) => {
  2     let { mars } = state
  3     
  4     fetch(`http://localhost:8080/rover`)    
  5         .then(res => res.json())     
  6         .then(mars => updateStoreRover(store, { mars }))      
  7 } 
```

- [x] The index.js returns an object labelled `response`
- [x] Parse the object using dot notation e.g.

* Variable - mars
* Object - response
* Array - photos
* Element - id

```
  mars.response.photos[0].id
```

- [X] Render information for the Curiosity Rover in the html
- [X] Test the fetch - show information/parse information

# Task 8 - [User Interface]()

- [x] Rover Dashboard minimum information

| Field  | JSON | Example |
|-------|-------| --------|
| Launch Date | launch_date |photos[0].rover.launch_date |
| Landing Date | landing_date | photos[0].rover.landing_date |
| Status | status | photos[0].rover.status |
| Available photos |img_src |photos[0].img_src |
| Date the most recent photos were taken | earth_date | photos[0].earth_date | 


Example code to render the information

```
const ImageOfTheDayRover = (mars) => {
    if (!mars) {
        getImageOfTheDayRover(store)
    }
    
    return (`
            <p>Testing Mars Rover</p>
            <p>Mars ID: ${mars.response.photos[0].id}</p>
            <p>Mars launch date: ${mars.response.photos[0].rover.launch_date}</p>
            <p>Mars landing date: ${mars.response.photos[0].rover.landing_date}</p>
            <p>Mars status: ${mars.response.photos[0].rover.status}</p>
            <img src="${mars.response.photos[0].img_src}" height="350px" width="100%" />
            <p>Mars image date: ${mars.response.photos[0].earth_date}</p>
    `)
}

```

# Task 9 - [TBC]()
- [ ] Display the information for three Mars Rovers (Curiosity, Opportunity and Spirit)
- [ ] Add an Alert for each Mars Rover to indicate it has been selected
- [ ] Setup new html for page
- [ ] Add fancy html

# Task X - [Rubric](https://review.udacity.com/#!/rubrics/2708/view)

- [ ] Use Pure functions to organise logic
- [ ] Use of const/let correctly
- [ ] Use of array methods correctly
- [ ] Use of Higher order functions - __use at least 2__

- [ ] App must use a Node/Express backend. Following npm package:

* Express
* Body parser
* Dotenv
* ImmutableJS


- [ ] Immutable JS 

Set up Immutable js for this project. 
For this project we are using a script for the CDN version. You should see the script referenced in `index.html`.

- [ ] Rover Dashboard minimum information
* Launch Date
* Landing Date
* Status
* Most recently available photos
* Date the most recent photos were taken

- [ ] Create an interative UI
- [ ] Create appealing page with mobile first styling
* Incorporate the apod image in the styling.
* Add the Mars weather embed code.
* Add a wind graph at the location of the rover.
