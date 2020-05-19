import { Character } from '../domain/character';

export default [
    {
        name: 'Orc',
        life: 100,
        strength: 6,
        maxLife: 100,
        habilities: [
            {
                name: 'Golpe de Machado',
                charged: 1,
                needed: 4,
                type: 'attack',
                dice: 4
            }, {
                name: 'Golpe de Machado Irritado',
                dice: 8,
                charged: 3,
                needed: 11,
                type: 'attack'
            }
        ]
    }
] as Character[]