const content = document.querySelector(".content")
const series = document.querySelector(".series")

class resultsClass {
  constructor(links, content) {
    this.links = links
    this.content = content
  }
  getResults() {
    fetch(this.links)
      .then(response => response.json())
      .then(data => {
        let trendingData = data.results

        let movieData = trendingData.map(elem => {

          return `<div class="col">
                    <img src="https://image.tmdb.org/t/p/w500/${elem.poster_path}" alt="">
                    <a href="https://api.themoviedb.org/3/movie/${elem.id}?api_key=cc52d7bc957397a1680d0fc49c0a4492&language=en-US">
                    <h5 class="title">${elem.original_title ? elem.original_title : elem.original_name}</h5></a>
                    <div class="flex">
                    <p class="date">${elem.release_date ? elem.release_date : elem.first_air_date}</p>
                    <div class="rating">
                      <p> <img src="../image/heart.svg"> <span>${elem.vote_average.toFixed(2)}<span></p>
                    </div>
                    </div>
                    </div>
                    `
        }).join('')
        this.content.innerHTML = movieData
      })
  }

}

const trending1 = new resultsClass("https://api.themoviedb.org/3/trending/movie/day?api_key=cc52d7bc957397a1680d0fc49c0a4492", content)
trending1.getResults()
const trending2 = new resultsClass("https://api.themoviedb.org/3/trending/tv/day?api_key=cc52d7bc957397a1680d0fc49c0a4492", series)
trending2.getResults()

const carousel = document.querySelector(".carousel")

console.log(carousel);


fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=cc52d7bc957397a1680d0fc49c0a4492")
  .then(resp => resp.json())
  .then(data => {
    let carousedList = data.results.map(elem => {

      return `<div class="item"> 
      <h5 class="title">${elem.original_title ? elem.original_title : elem.original_name}</h5></a>
      
      </div>
        `
    }).join("")
    const carouselElem = document.createElement("div")
    carouselElem.innerHTML = carousedList

    carouselElem.addEventListener("load", () => {
      carouselElem.classList.add("owl-carousel")
      carouselElem.classList.add("owl-theme")
      carousel.appendChild(carouselElem)

    })
  })

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})