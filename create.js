// const svgIcon = document.getElementById("openImage");
// const fileInput = document.getElementById("fileInput");

// svgIcon.addEventListener("click", () => {
//     fileInput.click(); // Trigger the file input
// });

// fileInput.addEventListener("change", (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
      
//         console.log("Selected file:", selectedFile.name);
//     }
// });
function triggerFileInput() {
    const fileInput = document.getElementById("fileInput");
    fileInput.click(); // Trigger the file input
}

document.getElementById("fileInput").addEventListener("change", (event) => {
    const selectedFile = event.target.files[0];
    
});
