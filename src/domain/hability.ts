export default interface Hability {
    name: string;
    needed: number;
    charged: number;
    dice: number;
    type: 'attack' | 'heal';
}