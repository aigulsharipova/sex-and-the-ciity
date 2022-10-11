const image = document.querySelector('#myImage');
const text = document.querySelector('h2');

const btnOne = document.querySelector('#one');
const btnTwo = document.querySelector('#two');

btnOne.addEventListener('click', mrBig);
function mrBig() {
image.setAttribute("src", "./style/photo2.jpg");
text.innerHTML = "Will they get married?"
}

btnTwo.addEventListener('click', aidon);
function aidon() {
image.setAttribute("src", "./style/photo3.webp");
text.innerHTML = "Will they get married?"
}