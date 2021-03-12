import Phaser from 'phaser'

export default class Game extends Phaser.Scene
{
    constructor ()
    {
        super('game');
    }

    create ()
    {
        const {width, height} = this.scale;

        const baby = this.physics.add.sprite(width * 0.5, height * 0.5, 'baby')
        .play('baby-idle');

    }
}
