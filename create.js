function uploadData(){
    const fileUploadInput = document.querySelector('.file-uploader');
  // using index [0] to take the first file from the array
  const image = fileUploadInput.files[0];
  
  // check if the file selected is not an image file
  if (!image.type.includes('image')) {
    return alert('Only images are allowed!');
  }
  
  // check if size (in bytes) exceeds 10 MB
  if (image.size > 10_000_000) {
    return alert('Maximum upload size is 10MB!');
  }
  
  const fileReader = new FileReader();
    fileReader.readAsDataURL(image);
  
    
    fileReader.onload = (fileReaderEvent) => {
      const profilePicture = document.querySelector('.create_upload_image');
      profilePicture.style.backgroundImage = `url(${fileReaderEvent.target.result})`;
    }
  }
  
  function saveData() {
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const imageInput = document.getElementById('image').files[0];
  
    const reader = new FileReader();
    reader.onload = function(event) {
        const movie = {
            title: title,
            year: year,
            image: event.target.result
        };
        let movies = JSON.parse(localStorage.getItem('movies')) || [];
      
        movies.push(movie);
  
        localStorage.setItem('movies', JSON.stringify(movies));
  
        window.location.href = 'movies.html';
    };
    reader.readAsDataURL(imageInput);
  
  }
  
  
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