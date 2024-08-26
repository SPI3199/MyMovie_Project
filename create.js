document.getElementById('image').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(fileReaderEvent) {
      document.querySelector('.create_upload_image').style.backgroundImage = `url(${fileReaderEvent.target.result})`;
  };

  if (file) {
      reader.readAsDataURL(file);
  }
});

// Form submission and storing data in local storage
document.getElementById('movieForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const year = document.getElementById('year').value;
  const image = document.getElementById('image').files[0];


  // Get existing movies from local storage or initialize an empty array
  let movies = JSON.parse(localStorage.getItem('movies')) || [];

  if (image) {
      const reader = new FileReader();
      reader.onload = function() {
          const movie = {
              title: title,
              year: year,
              image: reader.result // Store the base64 image string
          };

          movies.push(movie);
          localStorage.setItem('movies', JSON.stringify(movies)); // Save the array back to local storage

          window.location.href = 'movies.html';
      };
      reader.readAsDataURL(image);
  } else {
      alert('Please upload an image to save the movie!');
  }
});


  
  // document.addEventListener('DOMContentLoaded', function() {
  //   document.getElementById('movieForm').addEventListener('submit', function(event) {
  //       event.preventDefault(); // Prevent the form from submitting the traditional way
  
  //       // Get form values
  //       const title = document.getElementById('title').value;
  //       const year = document.getElementById('year').value;
  //       const imageInput = document.getElementById('image').files[0];
  
  //       // Function to handle image preview and data saving
  //       function handleImageUploadAndSave() {
  //           if (imageInput) {
  //               // Validate file
  //               if (!imageInput.type.includes('image')) {
  //                   return alert('Only images are allowed!');
  //               }
  
  //               if (imageInput.size > 10_000_000) {
  //                   return alert('Maximum upload size is 10MB!');
  //               }
  
  //               const fileReader = new FileReader();
  
  //               fileReader.onload = function(fileReaderEvent) {
  //                   // Image preview
  //                   const profilePicture = document.querySelector('.create_upload_image');
  //                   profilePicture.style.backgroundImage =` url(${fileReaderEvent.target.result})`;
  
  //                   // Save movie data
  //                   saveMovieData(fileReaderEvent.target.result);
  //               };
  
  //               fileReader.readAsDataURL(imageInput);
  //           } else {
  //               // Save movie data without an image
  //               saveMovieData(null);
  //           }
  //       }
  
  //       // Function to save movie data
  //       function saveMovieData(imageUrl) {
  //           const movie = {
  //               title: title,
  //               year: year,
  //               image: imageUrl
  //           };
  
  //           let movies = JSON.parse(localStorage.getItem('movies')) || [];
  //           movies.push(movie);
  
  //           localStorage.setItem('movies', JSON.stringify(movies));
  
  //           alert('Movie added successfully!');
  //           window.location.href = 'movies.html';
  //       }
  
  //       // Call the combined function
  //       handleImageUploadAndSave();
  //   });
  // });