import { Attack, Heal, HabilityActivation } from './types'

export const heal = (charName: string, diceRoll: number, multiplier: number): Heal => (
    {
        type: 'heal',
        char: charName,
        hability: { diceRoll, multiplier }
    }
)

export const attack = (charName: string, target: string, diceRoll: number, multiplier: number): Attack => ({
    type: 'attack',
    char: charName,
    target: target,
    hability: { diceRoll, multiplier }
})