import { Character } from "./character.js";

export class Enemy extends Character {
  constructor(
    imageSelector,
    src,
    name,
    health,
    defense,
    attackPower,
    attackDelay,
    powerLevel
  ) {
    super(imageSelector);
    this.src = src;
    this.name = name;
    this.health = health;
    this.defense = defense;
    this.attackPower = attackPower;
    this.attackDelay = attackDelay;
    this.powerLevel = powerLevel;
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
