const backgroundColorButton = document.querySelector('.backgroundColorButton');
const backgroundColorImage = document.querySelector('.backgroundColorImage');
const account = document.querySelectorAll('.account');
const blackColor = document.querySelector('.blackColor');
const body = document.body;


function renderBg() {
  let bgColor = JSON.parse(localStorage.getItem('siteBgColor')) || 'black';

  if (bgColor === 'black') {
    if (body.classList.contains('black')) {return}
    body.classList.replace('white', 'black');
    backgroundColorButton.classList.remove('blackImg');
    backgroundColorImage.src = 'imgs/whiteBulb.png';
  } else {
    if (body.classList.contains('white')) {return}
    body.classList.replace('black', 'white');
    backgroundColorButton.classList.add('blackImg');
    backgroundColorImage.src = 'imgs/blackBulb.png';
  }
}

function switchBgColor() {
  let bgColor = JSON.parse(localStorage.getItem('siteBgColor')) || 'black';

  if (bgColor === 'black') {
    localStorage.setItem('siteBgColor', JSON.stringify('white'));
    renderBg();
  } else {
    localStorage.setItem('siteBgColor', JSON.stringify('black'));
    renderBg();
  }
}


addEventListener('pageshow', () => {
  renderBg();

  account.forEach(value => {
    value.style.marginBottom = '50px';
  })

  blackColor.style.opacity = '0';
})
backgroundColorButton.addEventListener('click', switchBgColor);