window.addEventListener('keydown', (e) => {
  if (e.key === 'Alt') {
    document.querySelector('.full_screen_page').classList.add('active');
  }
})
window.addEventListener('keyup', (e) => {
  if (e.key === 'Alt') {
    document.querySelector('.full_screen_page').classList.remove('active');
  }
})

function openFullscreen() {
  const elem = document.querySelector('html');
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (window.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}


const eventFullScreenElement = document.createElement('span');
eventFullScreenElement.style.color = '#fff';
eventFullScreenElement.style.width = 'max-content';
eventFullScreenElement.style.cursor = 'pointer';
eventFullScreenElement.innerHTML = 'Full screen';

eventFullScreenElement.addEventListener('click', () => {
  openFullscreen();
  closeFullscreen();
})

const createElementStyle = document.createElement('div');
createElementStyle.innerHTML = `<style>
.full_screen_page{
  width : max-content;
  flex-direction : column;
  z-index : 99999999999;
  justify-content : center;
  align-items : center;
  border : 1px solid #fff;
  border-radius : 10px;
  position : fixed;
  top : 0;
  transition : .5s;
  overflow : hidden;
  padding : 10px;
  right : 0;
  background : #000;
  display: none;
}

.full_screen_page.active{
  display: flex;
}
</style>`;
const createElement = document.createElement('div');
createElement.classList.add('full_screen_page');

document.querySelector('body').insertAdjacentElement('afterbegin', createElement);

console.log(createElement)

createElement.insertAdjacentElement('afterbegin', eventFullScreenElement);
// createElement.insertAdjacentElement('afterbegin', eventFullScreenElementExit);
createElement.insertAdjacentElement('afterbegin', createElementStyle);

setTimeout(() => {
  console.log(document.querySelector('html'))
}, 1000)