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

# Task 2 - Architecture

#### nd032-c2-functional-programming-with-javascript-starter/project directory

```
├── node_modules
├── package.json
├── README.md
├── src
└── yarn.lock
```
#### nd032-c2-functional-programming-with-javascript-starter/project/src directory

* public - Client side rendering
* server - Server side rendering

```
├── public
│   ├── assets
│   ├── client.js
│   └── index.html
└── server
    └── index.js
```

#### server/index.js

- [x] Change the port from `3000` to `8080`
- [x] Path for `public`
- [x] Route for `/apod`
- [x] Uses process.env.API_KEY environment variable
- [ ] Add a new route for the Rover API call

#### public/index.html

- [x] Uses div=id="root"
- [x] includes "client.js"
- [ ] Add CSS public/assets/index.css
- [ ] Add CSS public/assets/resets.css

#### public/client.js

- [ ] Object: store
- [ ] root element
- [ ] function: updateStore -> render()
- [ ] function: render -> App()
- [ ] const App: anon function -> Greeting(), ImageOfTheDay()
- [ ] function: window.addEventListener(load)
- [ ] function: Greeting(name)
- [ ] function: ImageOfTheDay() -> getImageOfTheDay()
- [ ] function: getImageOfTheDay()

![Client.js Overview](https://github.com/rosera/nd032-c2-functional-programming-with-javascript-starter/blob/project/images/task_2_client_js.png "App Architecture")




# Task 3 - [TBC]()

- [ ] Setup new html for page
- [ ] Display the information for three Mars Rovers (Curiosity, Opportunity and Spirit)
- [ ] Add an Alert for each Mars Rover to indicate it has been selected
- [ ] Retrieve information using fetch API
- [ ] Display information from the fetch API


# Task 4 - [TBC]()

# Task 5 - [TBC]()
