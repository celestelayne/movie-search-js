
	// Variables
	var form = document.querySelector('form');
	var input = document.querySelector('.query');
	var ul = document.querySelector('.results');

	// Event Handlers
	form.addEventListener('submit', getMovies);

	// Functions
	function getMovies(e) {
		e.preventDefault();
		var search = input.value;
		var url = 'http://www.omdbapi.com/?s=' + search;

		// Make ajax request
		$.getJSON(url, updateMovies);

	}

	function getPosters(e){

	}


	// Update Page
	function updateMovies(json){
		// debugging tricks
		console.log('updateMovies');
		console.log(json);
		window.results = json;

		// Reset or clear the page
		ul.innerHTML = '';
		input.value = '';

		var movies = json['Search'];
		console.log(movies);

		movies.forEach(createMovieItem);
	}

	function createMovieItem(movie){
		console.log(movie);
		// Step 1.
		var li = document.createElement('li');
		var a = document.createElement('a');
		// Step 2. Attributes
		a.textContent = movie["Title"];
		var url = 'http://www.imdb.com/title/' + movie['imdbID']
		a.setAttribute('href', url);

		// Step 3. Append
		ul.appendChild(li);
		ul.appendChild(a);
	}

	function updatePoster(){

	}