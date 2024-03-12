// console.log(Math.PI); //3.141592653589793
// console.log(Math.max(1, 2, 3, 4, 100, 200, 7)); //
// console.log(Math.min(1, 2, 3, 4, 100, 200, 7)); //1
// console.log(Math.round(4.5)); //5
// console.log(Math.ceil(4.1)); //5
// console.log(Math.floor(4.5)); //4
// console.log(Math.pow(4, 5)); //1024
// console.log(Math.random()); //0.24059282675210358
// console.log(Math.floor(Math.random() * 10) + 1); //5  from 1 to 10

const wrapper = document.querySelector('.wrapper');

const btn = document.getElementById('gen');
btn.addEventListener('click', circleGenerator);

const circlesAmount = 1000;
const colors2paint = [
  'red',
  'blue',
  'green',
  'black',
  'yellow',
  'chartreuse',
  'chocolate',
  'cornflowerblue',
  'crimson',
  'deeppink',
  'gold',
  'indigo',
  'springgreen',
  'cadetblue',
  'silver',
  'olive',
];

function circleGenerator() {
  if (document.querySelector('.ball')) {
    const elementsToDelete = document.querySelectorAll('.ball');
    // Convert the NodeList to an array
    const elementsArray = Array.from(elementsToDelete);
    // Loop through the array and remove each element
    elementsArray.forEach(function (element) {
      element.remove();
    });
  }
  for (let i = 0; i <= circlesAmount; i++) {
    const ball = document.createElement('div');
    ball.setAttribute('class', 'ball');
    const randomColor = Math.floor(Math.random() * 16); // from 0 to 15
    const randomTop = Math.floor(Math.random() * 100); // from 0 to 99
    const randomLeft = Math.floor(Math.random() * 100); // from 0 to 99

    ball.style.cssText = `background-color:${colors2paint[randomColor]}; top: ${randomTop}%; left: ${randomLeft}%; background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 15%,
      ${colors2paint[randomColor]} 100%
    );`;
    wrapper.append(ball);
  }
}
