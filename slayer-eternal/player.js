import { Character } from "./character.js";

export class Player extends Character {
  constructor(imageSelector, attackPower, attackDelay, health, defense, name) {
    super(imageSelector);
    this.health = health;
    this.defense = defense;
    this.attackPower = attackPower;
    this.attackDelay = attackDelay;
    this.name = name;
  }

  attack(target) {
    console.log(`${this.name} is attacking ${target.name}!`);
    target.takeDamage(this.attackPower);
  }

  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} took ${amount} damage.`);
    if (this.health <= 0) {
      console.log(`${this.name} has been defeated!`);
      // Handle defeat logic here
    }
  }
}
