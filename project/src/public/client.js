let store = {
    user: { name: "Student" },
    apod: '',
    mars: '',
    rovers: ['Curiosity', 'Opportunity', 'Spirit'],
}


// add our markup to the page
const root = document.getElementById('root')

// listening for load event because page should load before any JS is called
window.addEventListener('load', () => {
  
  // Perform Rover workflow
  store.rovers.map((rover) => {
    renderRover(rover, store);
  });

  render(root, store)

})


const updateStore = (store, newState) => {
    store = Object.assign(store, newState)
    render(root, store)
}

const render = async (root, state) => {
    root.innerHTML = App(state)
}

// create content
const App = (state) => {
    let { rovers, apod } = state

    return `
        <header></header>
        <main>
            <h1>Mars Rover Dashboard</h1>
            <section>
                <p>
                    One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of
                    the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video.
                    This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other
                    applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image
                    explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds;
                    but generally help with discoverability of relevant imagery.
                </p>
                ${ImageOfTheDay(apod)}
            </section>
        </main>
        <footer></footer>
    `
}

// ------------------------------------------------------  COMPONENTS

// Example of a pure function that renders infomation requested from the backend
const ImageOfTheDay = (apod) => {

    // If image does not already exist, or it is not from today -- request it again
    const today = new Date()
    const photodate = new Date(apod.date)

    if (!apod || apod.date === today.getDate() ) {
        getImageOfTheDay(store)
    }

    // check if the photo of the day is actually type video!
    if (apod.media_type === "video") {
        return (`
            <p>See today's featured video <a href="${apod.url}">here</a></p>
            <p>${apod.title}</p>
            <p>${apod.explanation}</p>
        `)
    } else {
        return (`
            <img src="${apod.image.url}" height="350px" width="100%" />
            <p>${apod.image.title}</p>
            <p>${apod.image.copyright}</p>
            <p>${apod.image.explanation}</p>
        `)
    }
}

// ------------------------------------------------------  API CALLS

// Example API call
const getImageOfTheDay = (state) => {
    let { apod } = state

    // Reference index.js express Route: /apod
    fetch(`http://localhost:8080/apod`)
        .then(res => res.json())
        .then(apod => updateStore(store, { apod }))

    return apod 
}




const updateStoreRover = (rover, store, newState) => {
    store = Object.assign(store, newState)
    renderRover(rover, store)
}

const renderRover = async (rover, state) => {
    const marsrover = document.getElementById(rover)
    marsrover.innerHTML = AppRover(rover, state)
}

const AppRover = (rover, state) => {
    let { rovers, apod, mars } = state

    return `
      ${ImageOfTheDayRover(rover, mars)}
    `
}


// Example of a pure function that renders information requested from the backend
const ImageOfTheDayRover = (rover, mars) => {
    // Check if the object exists
    if (!mars) {
        getImageOfTheDayRover(rover, mars)
    }

    if (typeof(mars.response.photos) !== 'undefined') {
    // Create the html 
    return (`
       <section>
			 <div id="${mars.response.photos[0].rover.name}">
			 <div class="content">
			   <div class="inner">
           <h1>Rover: ${mars.response.photos[0].rover.name}</h1>
           <h3>Mission Information: ${mars.response.photos[0].rover.name}</h3>
           <p> Identifier: ${mars.response.photos[0].rover.id} | Launch Date: ${mars.response.photos[0].rover.launch_date} | Landing Date: ${mars.response.photos[0].rover.landing_date} | Status: ${mars.response.photos[0].rover.status} | Image date: ${mars.response.photos[0].earth_date}</p>
           <h3>Portfolio: ${mars.response.photos[0].rover.name}</h3>
           <div class="row">
              ${buildPortfolioGallery(mars.response.photos)}
           </div>
				</div>
				</div>
			</div>
      </section>
   `)
   } else {
     return (`<h2>Data Missing</h2>`)
   }
}

// Call the Curiosity Route - Curiosity Rover NASA API call
const getImageOfTheDayRover = (rover, state) => {
    let { mars } = state

    fetch(`http://localhost:8080/${rover.toLowerCase()}`)
        .then(res => res.json())
        .then(mars => updateStoreRover(rover, store, { mars }))
}

// Ref: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_portfolio_gallery
function buildPortfolioGallery(photos){
const portfolioImages = photos.map((photo) => {
  return `
    <div class="column">
      <div class="content">
        <img src="${photo.img_src}" data-position="center center" style="width:100%">
        <h4>Camera: ${photo.camera.full_name}</h4>
        <ul>
           <li>Camera: ${photo.camera.name}</li>
           <li>Identifier: ${photo.id}</li>
           <li>Rover Identifier: ${photo.camera.rover_id}</li>
           <li>Image Date: ${photo.earth_date}</li>
        </ul>
    </div>
  </div>`;
  });

  return portfolioImages.join("");
}
