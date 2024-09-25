const colors = ["green", "red", "rgba(133,122,200)", "#f15125"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    // Get a random number between 0 and the length of the colors array
    const random = randomNumber();
    // Change the background color
    document.body.style.backgroundColor = colors[random];
    // Update the text content to display the name of the color
    color.textContent = colors[random];
});

// Function to generate a random number
function randomNumber() {
    return Math.floor(Math.random() * colors.length);
}
