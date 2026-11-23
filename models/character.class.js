class Character extends MovableObj {
  get keyboard() {
    return this.world.keyboard;
  }

  get moving() {
    return this.keyboard.LEFT || this.keyboard.RIGHT;
  }

  //img arrays - map funktion gibt mir das array mit den den pfaden zurück, habs verworfen weil mir das mit den sprite sheets besser gefällt.
  rideImages = [1, 2, 3, 4].map((number) => `assets/img/old-images/old-design/characters/skater/ride/ride-${number}.png`);

  // Sheets
  sheetFolder = './assets/img/crazy-skate-run/character';

  standSheet = { path: `${this.sheetFolder}/skater-stand-sheet.png`, columns: 2, rows: 2 };
  phoneIdleSheet = { path: `${this.sheetFolder}/skater-phone-idle-sheet.png`, columns: 4, rows: 2 };
  rollSheet = { path: `${this.sheetFolder}/skater-roll-preview.png`, columns: 4, rows: 2 };
  pushSheet = { path: `${this.sheetFolder}/skater-push-preview.png`, columns: 4, rows: 3 };
  ollieSheet = { path: `${this.sheetFolder}/skater-ollie-preview.png`, columns: 4, rows: 3 };
  hurtSheet = { path: `${this.sheetFolder}/skater-hurt-sheet.png`, columns: 2, rows: 2 };
  fallSheet = { path: `${this.sheetFolder}/skater-fall-preview.png`, columns: 4, rows: 1 };

  x = 120;
  y = 480 - 100;
  width = 100;
  height = 100;
  speed = 8;
  world;
  altePosition = this.x;
  health = 100;
  jumped = false;
  lastActivity = Date.now();

  offset = {
    top: 8,
    right: 15,
    bottom: 12,
    left: 15,
  };

  constructor() {
    super();
    this.loadSheet(this.standSheet);
    this.loadMoreSheets([this.standSheet, this.phoneIdleSheet, this.rollSheet, this.pushSheet, this.ollieSheet, this.hurtSheet, this.fallSheet]);
    this.animate();
    this.controlWorld();
    this.fall();
    this.getRealFrame();
  }
  // ========== Animations ==========
  animate() {
    setInterval(() => this.updateAnimation(), 1000 / 15);
  }

  updateAnimation() {
    if (this.isDead()) return this.playOneSheet(this.fallSheet);
    if (this.isHurt()) return this.playHurtAnimation();
    if (this.isAbouveGround() || this.speedY > 0) return this.playSheet(this.ollieSheet);
    if (this.moving) return this.playSheet(this.rollSheet);
    this.playIdleAnimation();
  }

  playHurtAnimation() {
    this.playSheet(this.hurtSheet);
    this.frameIndex = Math.min(this.frameCount - 1, Math.floor((Date.now() - this.lastHit) / 100));
  }

  playIdleAnimation() {
    if (this.isAbouveGround() || this.speedY > 0 || this.isHurt()) this.lastActivity = Date.now();
    if (Date.now() - this.lastActivity < 4000) this.playSheet(this.standSheet);
    else this.playOneSheet(this.phoneIdleSheet);
  }

  fallAnimation() {
    let frame = 3;
    if (this.speedY > 10) frame = 0;
    else if (this.speedY > 4) frame = 1;
    else if (this.speedY > -6) frame = 2;
    this.img = this.imageCache[this.jumpImages[frame]];
  }
  // ========== Movement ==========
  controlWorld() {
    setInterval(() => {
      this.world.camera_x = -this.x + 100;
      if (!this.isDead()) {
        this.controlCharacter();
      }
    }, 1000 / 60);
  }

  controlCharacter() {
    if (this.keyboard.LEFT || this.keyboard.RIGHT || this.keyboard.SPACE || this.keyboard.THROW) {
      this.lastActivity = Date.now();
    }

    if (this.keyboard.RIGHT && this.x <= this.world.level.level_end_x) {
      this.moveRight();
      this.otherDirection = false;
    }
    if (this.keyboard.LEFT && this.x >= 110) {
      this.moveLeft();
      this.otherDirection = true;
    }
    if (this.keyboard.SPACE && !this.jumped && !this.isAbouveGround()) {
      this.jump();
      this.jumped = true;
    }
    if (!this.keyboard.SPACE) {
      this.jumped = false;
    }
  }
}
