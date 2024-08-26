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
            movie.image = imageUrl; // Update the movie object with new image
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
  
      // Event listener for image file input to update preview immediately
      document.getElementById('image').addEventListener('change', function (event) {
        const imageInput = event.target.files[0];
  
        if (imageInput) {
          // Validate the image
          if (!imageInput.type.includes('image')) {
            return alert('Only images are allowed!');
          }
  
          if (imageInput.size > 10_000_000) {
            return alert('Maximum upload size is 10MB!');
          }
  
          const reader = new FileReader();
          reader.onload = function (e) {
            const imageUrl = e.target.result;
            displayImagePreview(imageUrl); // Update the image preview immediately
          };
          reader.readAsDataURL(imageInput);
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
  
  function saveChanges() {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    const movieIndex = new URLSearchParams(window.location.search).get('index');
    const movie = movies[movieIndex];
  
    if (movie) {
      // Update movie data
      movie.title = document.getElementById('title').value;
      movie.year = document.getElementById('year').value;
  
      // Save updated movies array to local storage
      movies[movieIndex] = movie;
      localStorage.setItem('movies', JSON.stringify(movies));
      alert('Movie updated successfully!');
      window.location.href = 'movies.html';
    }
  }
  