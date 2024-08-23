const movieGrid = document.getElementById('movieGrid');
const movies = JSON.parse(localStorage.getItem('movies')) || [];

if (movies.length > 0) {
    movies.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-index', index);

        const imgElement = document.createElement('img');
        imgElement.src = movie.image;
        imgElement.alt = movie.title;

        const titleElement = document.createElement('h5');
        titleElement.textContent = movie.title;

        const yearElement = document.createElement('h6');
        yearElement.textContent = movie.year;

        card.appendChild(imgElement);
        card.appendChild(titleElement);
        card.appendChild(yearElement);

        card.addEventListener('click', function() {
            window.location.href = `edit.html?index=${index}`;
        });

        movieGrid.appendChild(card);
    });
} else {
    movieGrid.textContent = 'No movies to display';
}
