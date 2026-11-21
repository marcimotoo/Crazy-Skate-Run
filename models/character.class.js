class Character extends MovableObj {
  get keyboard() {
    return this.world.keyboard;
  }

  get moving() {
    return this.keyboard.LEFT || this.keyboard.RIGHT;
  }

  //img arrays
  rideImages = [1, 2, 3, 4].map((number) => `assets/img/old-images/old-design/characters/skater/ride/ride-${number}.png`);
  jumpImages = Array.from({ length: 12 }, (_, index) => `assets/img/old-images/old-design/characters/skater/ollie/ollie-${index + 1}.png`);
  standImages = [1, 2, 3, 4].map((number) => `assets/img/old-images/old-design/characters/skater/idle/idle-${number}.png`);
  stopImages = [1, 2, 3, 4].map((number) => `assets/img/old-images/old-design/characters/skater/brake/brake-${number}.png`);
  preJumpImages = [1, 2, 3, 4].map((number) => `assets/img/old-images/old-design/characters/skater/jump-preparation/jump-preparation-${number}.png`);
  deadImages = [1, 2, 3, 4].map((number) => `assets/img/old-images/old-design/characters/skater/fall/fall-${number}.png`);
  hurtImages = [1, 2, 3, 4].map((number) => `assets/img/old-images/old-design/characters/skater/hit/hit-${number}.png`);

  //sheets
  standSheet = {
    path: 'assets/img/crazy-skate-run/character/skater-stand-sheet.png',
    columns: 2,
    rows: 2,
  };
  phoneIdleSheet = {
    path: 'assets/img/crazy-skate-run/character/skater-phone-idle-sheet.png',
    columns: 4,
    rows: 2,
  };
  rollSheet = {
    path: 'assets/img/crazy-skate-run/character/skater-roll-preview.png',
    columns: 4,
    rows: 2,
  };
  pushSheet = {
    path: 'assets/img/crazy-skate-run/character/skater-push-preview.png',
    columns: 4,
    rows: 3,
  };
  ollieSheet = {
    path: 'assets/img/crazy-skate-run/character/skater-ollie-preview.png',
    columns: 4,
    rows: 3,
  };
  hurtSheet = {
    path: 'assets/img/crazy-skate-run/character/skater-hurt-sheet.png',
    columns: 2,
    rows: 2,
  };
  fallSheet = {
    path: 'assets/img/crazy-skate-run/character/skater-fall-preview.png',
    columns: 4,
    rows: 1,
  };

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
