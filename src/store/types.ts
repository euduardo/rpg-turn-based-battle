import { Action } from 'redux'

export interface HabilityActivation {
    diceRoll: number
    multiplier: number
}

export interface Heal extends Action {
    type: 'heal'
    char: string,
    hability: HabilityActivation,
}

export interface Attack extends Action {
    type: 'attack',
    char: string,
    hability: HabilityActivation,
    target: string
}

export type BattleAction =
    | Heal
    | Attack