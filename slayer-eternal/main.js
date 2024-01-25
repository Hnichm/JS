import { Player } from "./player.js";
import { Enemy } from "./enemy.js";

// Instantiate Player and Enemy
let player = new Player(".player-img", 10, 1000, 100, 5);
let enemy = new Enemy(".enemy-img", "Orc", 80, 3, 8, 1200, 5);

player.displayImage(
  "./images/main-character/main-character-warrior.png",
  150,
  150
);
enemy.displayImage("./images/enemies/orc-frenzy-1.png", 175, 175);
