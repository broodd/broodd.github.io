// import axios from 'axios'

const search_input = document.getElementById('search_input')
const search_btn_find = document.getElementById('search_btn_find')
const search_btn_clear = document.getElementById('search_btn_clear')
const search_results = document.getElementById('search_results')

const apiClient = axios.create({
	baseURL: 'https://uakino-player.herokuapp.com'
})

search_btn_find.addEventListener('click', function () {
	apiClient
		.get('films/search', {
			params: {
				query: search_input.value
			}
		})
		.then(res => {
			const films = res.data.films

			let filmsTemplate = `<div>`
			films.forEach(function (film) {
				filmsTemplate += `
          <div><img src="${film.poster}" alt=""><h4 data-url="${film.url}">${
					film.title
					}</h4><hr></div>
        `
			})

			filmsTemplate += `</div>`

			search_results.innerHTML = filmsTemplate

			const h4 = document.querySelectorAll("#search_results h4")
			h4.map = [].map
			h4.map(el => el.addEventListener('click', function () {
				const url = el.getAttribute('data-url') || el.dataset.url

				apiClient
					.get('films/video', {
						params: {
							url: url
						}
					}).then((res) => {
						console.log('--- res.data', res.data.urlVideo);

						var player = videojs('my-video');

						player.pause();
						player.src(res.data.urlVideo);
						// set src track corresponding to new movie //
						player.load();
						player.play();

						search_results.innerHTML = ''
					})
			}))
		})

})


// .innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
