let store = {
    user: { name: "Student" },
    apod: '',
    mars: '',
    rovers: ['Curiosity', 'Opportunity', 'Spirit'],
}


// add our markup to the page
const root = document.getElementById('root')
const curiosity = document.getElementById('curiosity')

let slideIndex = 1;


// listening for load event because page should load before any JS is called
window.addEventListener('load', () => {
  render(root, store)
  renderRover(curiosity, store)

  // Enable the slideshow
  showSlides(slideIndex);
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
    
    console.log("IOTD Dates: " + photodate.getDate(), today.getDate());

    console.log(photodate.getDate() === today.getDate());
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

    return data
}



// TODO: Temporary Function - will be replaced
// ------------------------------------------------------  COMPONENTS
function tempButtonFunction(){
  renderRover(curiosity, store)
}

const updateStoreRover = (store, newState) => {
    store = Object.assign(store, newState)
    renderRover(curiosity, store)
}

const renderRover = async (root, state) => {
    root.innerHTML = AppRover(state)
}

const AppRover = (state) => {
    let { rovers, apod, mars } = state

    return `
      ${ImageOfTheDayRover(mars)}
    `
}

// Example of a pure function that renders information requested from the backend
const ImageOfTheDayRoverTemp = (mars) => {

    // Check if the object exists
    if (!mars) {
        getImageOfTheDayRover(store)
    }

    // Create the html 
    return (`
       <main>
       <section>
			 <div class="content">
			   <div class="inner">
           <h1>Rover: ${mars.response.photos[0].rover.name}</h1>
           <p>Curiosity is a car-sized rover designed to explore the Gale crater on Mars as part of NASA's Mars Science Laboratory (MSL) mission.[2] <br>Curiosity was launched from Cape Canaveral on November 26, 2011, at 15:02 UTC and landed on Aeolis Palus inside Gale on Mars on August 6, 2012, 05:17 UTC.<br>[5][6][9] The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center of the rover's touchdown target after a 560 million km (350 million mi) journey.[10][11] The rover's goals include an investigation of the Martian climate and geology; assessment of whether the selected field site inside Gale has ever offered environmental conditions favorable for microbial life, including investigation of the role of water; and planetary habitability studies in preparation for human exploration.
           </p>
           <a href="https://en.wikipedia.org/wiki/Curiosity_(rover)"Mars Rover Wikipedia excerpt"</a>
           <h3>Mission Information: ${mars.response.photos[0].rover.name}</h3>
           Mars ID: ${mars.response.photos[0].id} | Mars launch date: ${mars.response.photos[0].rover.launch_date} | Mars landing date: ${mars.response.photos[0].rover.landing_date}<br>
           Mars status: ${mars.response.photos[0].rover.status} | Mars image date: ${mars.response.photos[0].earth_date}<br></p>

           <div class="slideshow-container">
             <div class="mySlides fade">
               <div class="numbertext">1 / 3</div>
                  <img src="${mars.response.photos[0].img_src}" data-position="center center" style="width:100%">
               <div class="text">${mars.response.photos[0].camera.full_name}:${mars.response.photos[0].id}</div>
             </div>

             <div class="mySlides fade">
               <div class="numbertext">2 / 3</div>
                  <img src="${mars.response.photos[1].img_src}" data-position="center center" style="width:100%">
               <div class="text">${mars.response.photos[1].camera.full_name}:${mars.response.photos[1].id}</div>
             </div>

             <div class="mySlides fade">
               <div class="numbertext">3 / 3</div>
                  <img src="${mars.response.photos[2].img_src}" data-position="center center" style="width:100%">
               <div class="text">${mars.response.photos[2].camera.full_name}:${mars.response.photos[2].id}</div>
             </div>

             <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
             <a class="next" onclick="plusSlides(1)">&#10095;</a>

          </div>
          <br>

          <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span> 
            <span class="dot" onclick="currentSlide(2)"></span> 
            <span class="dot" onclick="currentSlide(3)"></span> 
          </div>
				</div>
			</div>
      </section>
      </main>
   `)
}

// Example of a pure function that renders information requested from the backend
const ImageOfTheDayRover = (mars) => {

    // Check if the object exists
    if (!mars) {
        getImageOfTheDayRover(store)
    }

    // Create the html 
    return (`
       <section>
			 <div class="content">
			   <div class="inner">
           <h1>Rover: ${mars.response.photos[0].rover.name}</h1>
           <a href="https://en.wikipedia.org/wiki/Curiosity_(rover)"><h3>Wikipedia Information: ${mars.response.photos[0].rover.name}</h3></a>
           <p>Curiosity is a car-sized rover designed to explore the Gale crater on Mars as part of NASA's Mars Science Laboratory (MSL) mission.[2] <br>Curiosity was launched from Cape Canaveral on November 26, 2011, at 15:02 UTC and landed on Aeolis Palus inside Gale on Mars on August 6, 2012, 05:17 UTC.<br>[5][6][9] The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center of the rover's touchdown target after a 560 million km (350 million mi) journey.[10][11] The rover's goals include an investigation of the Martian climate and geology; assessment of whether the selected field site inside Gale has ever offered environmental conditions favorable for microbial life, including investigation of the role of water; and planetary habitability studies in preparation for human exploration.
           </p>

           <div class="slideshow-container">
             ${buildSlideShow(mars.response.photos)}

             <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
             <a class="next" onclick="plusSlides(1)">&#10095;</a>

          </div>
          <br>

          <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span> 
            <span class="dot" onclick="currentSlide(2)"></span> 
            <span class="dot" onclick="currentSlide(3)"></span> 
          </div>

           <h3>Mission Information: ${mars.response.photos[0].rover.name}</h3>
           
          <p> Identifier: ${mars.response.photos[0].rover.id} | Launch Date: ${mars.response.photos[0].rover.launch_date} | Landing Date: ${mars.response.photos[0].rover.landing_date} | Status: ${mars.response.photos[0].rover.status} | Image date: ${mars.response.photos[0].earth_date}</p>
				</div>
			</div>
      </section>
   `)
}




function buildSlideShow(photos){
  const Photo_Max = photos.length + 1;
  let index = 1;

  const slideShow = photos.map((photo) => {
    return `
      <div class="mySlides fade">
         <div class="numbertext">${index=index+1}/${Photo_Max}</div>
           <img src="${photo.img_src}" data-position="center center" style="width:100%">
         <div class="text">Camera: ${photo.camera.full_name} | Identifier: ${photo.id} | Image Date: ${photo.earth_date}</div>
      </div>
    `;
  });

  return slideShow.join("");
}


// Call the Curiosity Route - Curiosity Rover NASA API call
const getImageOfTheDayRover = (state) => {
    let { mars } = state

    fetch(`http://localhost:8080/curiosity`)
        .then(res => res.json())
        .then(mars => updateStoreRover(store, { mars }))
}
// ------------------------------------------------------  COMPONENTS

// ------------------------------------------------------  Slide Show 
// Ref: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

