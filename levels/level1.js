const level1 = new Level(
  [new Secruity(), new Secruity(), new Secruity()],
  [new Cloud(), new Cloud(), new Cloud()],
  [
    new BackgroundObject('./assets/img/hintergruende/himmel.png', 0, 720, 480),
    new BackgroundObject('./assets/img/hintergruende/skyline-transparent.png', 0, 720, 800),
    new BackgroundObject('./assets/img/hintergruende/haeuser-vorne.png', 0, 720, 480),
    new BackgroundObject('./assets/img/hintergruende/strasse-breit.png', 0, 720, 50),
    new BackgroundObject('./assets/img/hintergruende/himmel.png', 720, 720, 480),
    new BackgroundObject('./assets/img/hintergruende/skyline-transparent.png', 720, 720, 800),
    new BackgroundObject('./assets/img/hintergruende/haeuser-vorne.png', 720, 720, 480),
    new BackgroundObject('./assets/img/hintergruende/strasse-breit.png', 720, 720, 50),
  ],
);
