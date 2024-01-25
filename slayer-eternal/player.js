import { Character } from "./character.js";

export class Player extends Character {
  constructor(imageSelector, attackPower, attackDelay, health, defense) {
    super(imageSelector);
    this.health = health;
    this.defense = defense;
    this.attackPower = attackPower;
    this.attackDelay = attackDelay;
  }

  attack() {
    console.log("Attacking the enemy!");
    // Attack logic here
  }
}
