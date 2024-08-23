document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieIndex = urlParams.get('index');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    const movie = movies[movieIndex];

    if (movie) {
        document.getElementById('title').value = movie.title;
        document.getElementById('year').value = movie.year;

        document.getElementById('editMovieForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const title = document.getElementById('title').value;
            const year = document.getElementById('year').value;
            const imageInput = document.getElementById('image').files[0];

            movie.title = title;
            movie.year = year;

            if (imageInput) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    movie.image = e.target.result;
                    saveChanges();
                };
                reader.readAsDataURL(imageInput);
            } else {
                saveChanges();
            }

            function saveChanges() {
                movies[movieIndex] = movie;
                localStorage.setItem('movies', JSON.stringify(movies));
                alert('Movie updated successfully!');
                window.location.href = 'movies.html';
            }
        });
    } else {
        alert('Movie not found!');
        window.location.href = 'movies.html';
    }
});