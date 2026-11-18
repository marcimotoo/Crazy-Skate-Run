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
  KeyF: 'THROW',
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
