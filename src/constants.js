const SCENARIO_IMAGE_PATH = "assets/images/scenario/forest.png";
const HERO_IMAGE_PATH = "assets/images/character/hipsta.png";
const ENEMY_GOTINHA_IMAGE_PATH = "assets/images/enemies/gotinha.png";
const SOUND_TRACK_PATH = "assets/sounds/sound_track.mp3";
const GAME_OVER_SOUND_TRACK_PATH = "assets/sounds/game_over_sound_track.wav";

const HERO_WIDTH_IN_SCREEN = 110;
const HERO_HEIGHT_IN_SCREEN = 135;
const HERO_SPRITE_WIDTH = 220;
const HERO_SPRITE_HEIGHT = 270;
const HERO_FRAMES_COORDINATES = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];

const ENEMY_GOTINHA_SPEED = 7;
const ENEMY_GOTINHA_WIDTH_IN_SCREEN = 52;
const ENEMY_GOTINHA_HEIGHT_IN_SCREEN = 52;
const ENEMY_GOTINHA_SPRITE_WIDTH = 104;
const ENEMY_GOTINHA_SPRITE_HEIGHT = 104;
const ENEMY_GOTINHA_FRAMES_COORDINATES = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626]
];

const HITBOX_PRECISION = .7;
