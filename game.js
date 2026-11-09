let canvas;
let world;
const keyboard = new Keyboard();

function init() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
}

const keyMapping = {
  KeyD: 'RIGHT',
  KeyA: 'LEFT',
  KeyW: 'UP',
  KeyS: 'DOWN',
  Space: 'SPACE',
};

function handleKeyboard(event, isPressed) {
  const key = keyMapping[event.code];

  if (key) {
    event.preventDefault();
    keyboard[key] = isPressed;
  }
}

window.addEventListener('keydown', (event) => {
  handleKeyboard(event, true);
});

window.addEventListener('keyup', (event) => {
  handleKeyboard(event, false);
});

// window.addEventListener('keydown', (event) => {
//   if (event.code == 'KeyD') {
//     keyboard.RIGHT = true;
//   }
//   if (event.code == 'KeyA') {
//     keyboard.LEFT = true;
//   }
//   if (event.code == 'KeyW') {
//     keyboard.UP = true;
//   }
//   if (event.code == 'KeyS') {
//     keyboard.DOWN = true;
//   }
//   if (event.code == 'Space') {
//     keyboard.SPACE = true;
//   }
// });

// window.addEventListener('keyup', (event) => {
//   if (event.code == 'KeyD') {
//     keyboard.RIGHT = false;
//   }
//   if (event.code == 'KeyA') {
//     keyboard.LEFT = false;
//   }
//   if (event.code == 'KeyW') {
//     keyboard.UP = false;
//   }
//   if (event.code == 'KeyS') {
//     keyboard.DOWN = false;
//   }
//   if (event.code == 'Space') {
//     keyboard.SPACE = false;
//   }
// });
