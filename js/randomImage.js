const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["plt1.jpg", "plt2.jpeg", "plt3.jpg", "plt4.jpg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length );
    console.log(randomIndex);
    image.src = "images/" + images[randomIndex];
}