class Level {
  enemies;
  clouds;
  backgroundObjects;
  endboss;
  coins;
  energyCans;
  level_end_x = 800;

  constructor(enemies, clouds, backgroundObjects, endboss, coins, energyCans) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.endboss = endboss;
    this.coins = coins;
    this.energyCans = energyCans;
  }
}
