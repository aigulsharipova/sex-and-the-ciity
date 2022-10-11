const image = document.querySelector('#myImage');
const text = document.querySelector('h2');

const btnOne = document.querySelector('#one');
const btnTwo = document.querySelector('#two');

btnOne.addEventListener('click', mrBig);
function mrBig() {
  image.setAttribute("src", "./style/photo2.webp");
  text.innerHTML = "Will they get married?";
  btnOne.innerHTML = "Someday!";
  btnTwo.innerHTML = "No! Never";

  btnOne.addEventListener('click', wedding);
}

function wedding() {
  image.setAttribute("src", "./style/photo.jpg")
  text.innerHTML = "They will get married, but they will not have children";
  btnOne.style = "dispay: none";
  btnTwo.style = "dispay: none";
}



btnTwo.addEventListener('click', aidon);
function aidon() {
image.setAttribute("src", "./style/photo3.webp");
text.innerHTML = "Will they get married?"
btnOne.innerHTML = "Someday!"
btnTwo.innerHTML = "No! Never"
}