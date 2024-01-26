import { Player } from "./player.js";
import { Enemy } from "./enemy.js";

let player = new Player(".player-img", 10, 10000, 100, 5, "Player");
player.displayImage(
  "./images/main-character/main-character-warrior.png",
  150,
  150
);

let enemyAttackInterval; // Declare the enemy attack interval globally

function createEnemy() {
  if (enemyAttackInterval) {
    clearInterval(enemyAttackInterval);
  } // Clear previous interval

  let newEnemy = new Enemy(
    ".enemy-img",
    "./images/enemies/orc-berserker-2.png",
    "Orc",
    50,
    1,
    2,
    1000,
    0
  );
  newEnemy.displayImage(newEnemy.src, 150, 150);

  // Start enemy's attack interval immediately
  enemyAttackInterval = setInterval(() => {
    newEnemy.attack(player);
    if (player.health <= 0) {
      clearInterval(enemyAttackInterval);
      console.log("You were defeated.");
      // Handle player defeat logic here
    }
  }, newEnemy.attackDelay);

  return newEnemy;
}

function startCombat(player, enemy) {
  const playerAttackInterval = setInterval(() => {
    player.attack(enemy);
    if (enemy.health <= 0) {
      clearInterval(playerAttackInterval);
      enemy = createEnemy(); // Respawn and restart enemy's attack
    }
  }, player.attackDelay);
}

let enemy = createEnemy(); // Create the initial enemy
startCombat(player, enemy);
