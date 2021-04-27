"user strict"

// How to change button color

let button = document.querySelector('button');

//button.onclick = function () {
  //  this.style.backgroundColor = "grey";
//}

button.addEventListener('click', () => button.style.backgroundColor='grey')