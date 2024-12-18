// Get all images with the class 'projectImg'
var images = document.querySelectorAll(".projectImg");

// Get the modal, modal image, and caption elements
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop through each image and add the click event
images.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "block"; // Show the modal
        modalImg.src = this.src; // Set the modal image to the clicked image's source
        captionText.innerHTML = this.alt; // Set the caption to the clicked image's alt text
    }
});

// Get the close button element and add click event to close the modal
document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = "none"; // Close the modal
}

// When the user clicks anywhere outside the modal image, close the modal
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Close the modal if clicked outside the image
    }
}