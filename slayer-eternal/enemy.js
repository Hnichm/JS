import { Character } from "./character.js";

export class Enemy extends Character {
  constructor(
    imageSelector,
    name,
    health,
    defense,
    attackPower,
    attackDelay,
    powerLevel
  ) {
    super(imageSelector);
    this.name = name;
    this.health = health;
    this.defense = defense;
    this.attackPower = attackPower;
    this.attackDelay = attackDelay;
    this.powerLevel = powerLevel;
  }
}
