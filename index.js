function openFullscreen() {
  const elem = document.querySelector('html');
  // const elem = document.querySelector('body');
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
})


const eventFullScreenElementExit = document.createElement('span');
eventFullScreenElementExit.style.color = '#fff';
eventFullScreenElementExit.style.width = 'max-content';
eventFullScreenElementExit.style.cursor = 'pointer';
eventFullScreenElementExit.innerHTML = 'Exit full screen';
eventFullScreenElementExit.addEventListener('click', () => {
  closeFullscreen();
})


const createElement = document.createElement('div');
createElement.style.width = 'max-content';
// createElement.style.minHeight = '100px';
createElement.style.display = 'flex';
createElement.style.flexDirection = 'column';
createElement.style.zIndex = '99999999999';
createElement.style.justifyContent = 'center';
createElement.style.alignItems = 'center';
createElement.style.border = '1px solid #fff';
createElement.style.borderRadius = '10px';
createElement.style.position = 'absolute';
createElement.style.top = '10px';
createElement.style.transition = '.5s';
createElement.style.overflow = 'hidden';
createElement.style.padding = '10px';
createElement.style.right = '10px';
createElement.style.background = '#000';
document.querySelector('body').insertAdjacentElement('afterbegin', createElement);

console.log(createElement)

createElement.insertAdjacentElement('afterbegin', eventFullScreenElement);
createElement.insertAdjacentElement('afterbegin', eventFullScreenElementExit);

window.addEventListener('DOMContentLoaded', () => {
  openFullscreen();
})