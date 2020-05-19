import { Character } from '../domain/character';

export default [
    {
        name: 'Link',
        life: 100,
        strength: 4,
        maxLife: 100,
        habilities: [
            {
                name: 'Golpe de Espada',
                charged: 1,
                needed: 1,
                type: 'attack',
                dice: 3
            }, {
                name: 'Cura Divina',
                type: 'heal',
                needed: 3,
                charged: 1,
                dice: 8
            }, {
                name: 'Master Sword',
                dice: 12,
                charged: 3,
                needed: 7,
                type: 'attack'
            }
        ]
    }
] as Character[]