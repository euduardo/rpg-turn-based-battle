import Hability from './hability'

export interface Character {
    name: string;
    life: number;
    strength: number;
    habilities: Hability[];
    maxLife: number
}