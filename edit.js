


document.addEventListener('DOMContentLoaded', function () {
    // Get movie index from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const movieIndex = urlParams.get('index');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    const movie = movies[movieIndex];
  
    // Function to display image in the preview div
    function displayImagePreview(imageUrl) {
        const profilePicture = document.querySelector('.create_upload_image');
        profilePicture.style.backgroundImage = `url(${imageUrl})`;
    }
  
    if (movie) {
        // Prefill form fields with movie data
        document.getElementById('title').value = movie.title;
        document.getElementById('year').value = movie.year;
  
        // Add event listener for form submission
        document.getElementById('editMovieForm').addEventListener('submit', function (event) {
            event.preventDefault();
  
            const title = document.getElementById('title').value;
            const year = document.getElementById('year').value;
            const imageInput = document.getElementById('image').files[0];
  
            // Update movie data
            movie.title = title;
            movie.year = year;
  
            if (imageInput) {
                // Validate and upload the image
                if (!imageInput.type.includes('image')) {
                    return alert('Only images are allowed!');
                }
  
                if (imageInput.size > 10_000_000) {
                    return alert('Maximum upload size is 10MB!');
                }
  
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imageUrl = e.target.result;
                    displayImagePreview(imageUrl); // Display the image preview
                    movie.image = imageUrl; // Update the movie object with new image
                    // saveChanges(); // Save changes after image load
                    movies[movieIndex] = movie;
                    localStorage.setItem('movies', JSON.stringify(movies));
                    alert('Movie updated successfully!');
                    window.location.href = 'movies.html';
                };
                reader.readAsDataURL(imageInput);
            } else {
                saveChanges();
            }
  
        });
  
        // Initial display of the existing movie image, if any
        if (movie.image) {
            displayImagePreview(movie.image);
        }
    } else {
        alert('Movie not found!');
        window.location.href = 'movies.html';
    }
  });
  
  