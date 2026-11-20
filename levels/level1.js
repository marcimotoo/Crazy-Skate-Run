const backgroundArray = [];
let x = 0;
const backgrounds = [
  { name: 'himmel', height: 480, parallax: 0.1 },
  { name: 'skyline-transparent', height: 800, parallax: 0.5 },
  { name: 'haeuser-vorne', height: 480, parallax: 1 },
  { name: 'strasse-breit', height: 50, parallax: 1 },
];
const pathName = backgrounds.map((background) => ({
  path: `./assets/img/hintergruende/${background.name}.png`,
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
      backgroundArray.push(new BackgroundObject(background.path, x, 720, background.height, background.parallax));
    });
    x += 720;
  }
  return backgroundArray;
}
