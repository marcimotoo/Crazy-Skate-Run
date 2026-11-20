class Level {
  backgroundObjects;
  enemies;
  clouds;
  endboss;
  coins;
  energyCans;
  level_end_x;

  constructor(backgroundObjects, enemies, clouds, endboss, coins, energyCans) {
    this.backgroundObjects = backgroundObjects;
    this.enemies = enemies;
    this.clouds = clouds;
    this.endboss = endboss;
    this.coins = coins;
    this.energyCans = energyCans;

    this.level_end_x = Math.max(...backgroundObjects.map((background) => background.x + background.width));
  }
}
