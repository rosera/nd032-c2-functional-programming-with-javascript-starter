# Task 1

## Note  Does it matter what location i start this from? 

Yes, it needs be independent otherwise it will update existing repo

## Task 1.1 Download the code
```
git clone https://github.com/rosera/nd032-c2-functional-programming-with-javascript-starter.git
```

## Task 1.2 Change to the project directory
```
cd nd032-c2-functional-programming-with-javascript-starter
```

## Task 1.3 Switch to the correct branch
```
git checkout project
```

## Task 1.4 Change to the project directory
```
cd project
```

## Task 1.5 Initialise yarn for the local directory

```
yarn
```

## Task 1.6 Run the application code
```
yarn start
```
![Initial Project view](https://github.com/rosera/nd032-c2-functional-programming-with-javascript-starter/blob/project/images/task_1_yarn_install.png "Initial Yarn installation")

## Task 1.7 Change the `src/public/client.js` file to use port:8080

```
const getImageOfTheDay(){

  fetch (... :8080/apod)
  
}
```

## Task 1.8 Add an API Key in `.env` file
__NOTE:__ Change to valid NASA API key or `DEMO_KEY`
```
API_KEY=YOUR_API_KEY
```

## Task 1.9 If the API Key is invalid you would see the following:
```
yarn start
```

![No Key Project view](https://github.com/rosera/nd032-c2-functional-programming-with-javascript-starter/blob/project/images/task_1_yarn_start_no_key.png "Initial Yarn installation")



## Task 1.10 If the API Key is valid you would see the following:

![Working environment](https://github.com/rosera/nd032-c2-functional-programming-with-javascript-starter/blob/project/images/task_1_nasa.png "NASA API Setup")
