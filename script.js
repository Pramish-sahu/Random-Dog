// // script.js

document.addEventListener('DOMContentLoaded', function() {
    // URL of the dog image API
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';
   console.log(apiUrl)
    // Function to fetch and display a random dog image
    function fetchRandomDogImage() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Get the image URL from the API response
                const imageUrl = data.message;
                
                // Select the image element and set its src attribute
                const dogImageElement = document.getElementById('dogimage');
                dogImageElement.src = imageUrl;
                
                // Optionally adjust the image size if needed
                dogImageElement.style.width = '300px'; // Set desired width
                dogImageElement.style.height = 'auto'; // Maintain aspect ratio
            })
            .catch(error => {
                console.error('Error fetching the dog image:', error);
            });
    }

    // Fetch a random dog image when the page loads
    fetchRandomDogImage();
});


// document.addEventListener("DOMContentLoaded", function () {

//     // Fetch the random dog image
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response =>response.json())
//     // console.log(response)
//     .then(data=> {
//     console.log(data)
//     const dogImage= document.getElementById('dogImage'); 
//     dogImage.src= data.message;
    
//     }) .catch(error => console.error("Error fetching the dog image:", error));
    
//     });