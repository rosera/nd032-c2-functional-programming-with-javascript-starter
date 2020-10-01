# Workbook

- [x] Fork the original [Mars Dashboard Repo](https://github.com/udacity/nd032-c2-functional-programming-with-javascript-starter.git)
- [x] Ensure `yarn` is available on the development machine
- [ ] Get a [NASA developer API key](https://api.nasa.gov/)

# Task 1 - [Initialise the environment](https://github.com/rosera/nd032-c2-functional-programming-with-javascript-starter/blob/project/task-one.md)

- [x] Download the code
- [x] Switch to the branch `project`
- [x] Change to the sub-directory `project`
- [x] Amend the NASA API_KEY
- [x] Rename `.env-sample` environment file to `.env`
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

- [ ] Duplicate the updateStore function to call the renderRover function
- [ ] Update the server/index.js to `return the json data`
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

- [ ] Update the public/client.js
```
  1 const getImageOfTheDayRover = (state) => {
  2     let { mars } = state
  3     
  4     fetch(`http://localhost:8080/rover`)    
  5         .then(res => res.json())     
  6         .then(mars => updateStoreRover(store, { mars }))      
  7 } 
```

- [ ] The index.js the returned object is labelled `response`
- [ ] Parse the object using dot notation e.g.

```
  mars.response.photos[0].id
```
- [ ] Render information for the Curiosity Rover in the html
- [ ] Test the fetch - show information/parse information

# Task 8- [TBC]()
- [ ] Display the information for three Mars Rovers (Curiosity, Opportunity and Spirit)
- [ ] Add an Alert for each Mars Rover to indicate it has been selected
- [ ] Setup new html for page
- [ ] Add fancy html
