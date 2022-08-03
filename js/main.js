const content = document.querySelector(".content")

const apiRe = "https://api.themoviedb.org/3/trending/movie/day?api_key=cc52d7bc957397a1680d0fc49c0a4492"
fetch(apiRe)
  .then(response => response.json())
  .then(data => {
    let trendingData = data.results
    console.log(trendingData[0])
    let movieData = trendingData.map(elem => {
      // console.log(con);
      return `<div class="col">
                    <img src="https://image.tmdb.org/t/p/w500/${elem.poster_path}" alt="">
                    <a href="https://api.themoviedb.org/3/movie/${elem.id}?api_key=cc52d7bc957397a1680d0fc49c0a4492&language=en-US">
                    <h5 class="title">${elem.original_title}</h5></a>
                    <div class="flex">
                    <p class="date">${elem.release_date}</p>
                    <div class="rating">
                      <p> <img src="../image/heart.svg"> <span>${elem.vote_average}<span></p>
                    </div>
                    </div>
                    </div>
                    `
    }).join('')
    content.innerHTML = movieData
  })
// .catch(err => console.error(err));
// let nums = [1, 2, 3, 4, 5, 6]
// const movieData = nums.map(num =>
//   console.log(num))
