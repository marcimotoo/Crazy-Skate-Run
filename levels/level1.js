const backgroundArray = [];
let x = 0;
const backgrounds = [
  { name: 'sky', parallax: 0.05 },
  { name: 'cloud', parallax: 0.1 },
  { name: 'skyline', parallax: 0.3 },
  { name: 'grass', parallax: 1 },
  { name: 'foreground', parallax: 1 },
];
const pathName = backgrounds.map((background) => ({
  path: `./assets/img/crazy-skate-run/backgrounds/layer-${background.name}-1.png`,
  height: background.height,
  parallax: background.parallax,
}));

const level1 = new Level(
  forBackground(),
  [new Secruity(), new Secruity(), new Secruity()],
  [new Cloud(), new Cloud(), new Cloud()],
  [new Endboss()],
  [new Coin(280, 380), new Coin(460, 380), new Coin(640, 380)],
  [new EnergyCan(380, 380), new EnergyCan(280, 380), new EnergyCan(280, 380)],
);

function forBackground() {
  for (let i = 0; i < 100; i++) {
    pathName.forEach((background) => {
      backgroundArray.push(new BackgroundObject(background.path, x, background.parallax));
    });
    x += 1440;
  }
  return backgroundArray;
}
