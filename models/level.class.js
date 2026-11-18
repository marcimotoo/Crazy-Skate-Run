class Level {
  enemies;
  clouds;
  backgroundObjects;
  endboss;
  coins;
  level_end_x = 800;

  constructor(enemies, clouds, backgroundObjects, endboss, coins = []) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.endboss = endboss;
    this.coins = coins;
  }
}
