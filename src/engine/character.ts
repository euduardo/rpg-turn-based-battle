export default class Character {
  constructor(
    public name: string,
    private life: number,
    private strength: number
  ) {}

  attack = (multiplier: number) => {
    return this.strength * multiplier;
  };

  takeDamage = (damage: number) => {
    this.life -= damage;
  };

  get isDead() {
    return this.life <= 0;
  }
}

export {};
