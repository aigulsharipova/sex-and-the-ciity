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
  btnTwo.addEventListener('click', noWedding);
}

function wedding() {
  image.setAttribute("src", "./style/photo.jpg")
  text.innerHTML = "They will get married, but <p> they will not have children";
  btnOne.style = "display: none";
  btnTwo.style = "display: none";
}

function noWedding() {
  image.setAttribute("src", "./style/photo4.jpg")
  text.innerHTML = "He will leave Carrie";
  btnOne.style = "display: none";
  btnTwo.style = "display: none";
}

btnTwo.addEventListener('click', aidon);
function aidon() {
image.setAttribute("src", "./style/photo3.webp");
text.innerHTML = "Will they get married?"
btnOne.innerHTML = "Someday!"
btnTwo.innerHTML = "No! Never"

btnOne.addEventListener('click', weddingAidon);
btnTwo.addEventListener('click', noWeddingAidon);
}

function weddingAidon() {
  image.setAttribute("src", "./style/photo5.png")
  text.innerHTML = "They will get married and will be happy";
  btnOne.style = "display: none";
  btnTwo.style = "display: none";
}

function noWeddingAidon() {
  image.setAttribute("src", "./style/photo7.jpeg")
  text.innerHTML = "She will leave Aidan";
  btnOne.style = "display: none";
  btnTwo.style = "display: none";
}