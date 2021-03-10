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

        const egg = this.physics.add.sprite(width * 0.5, height * 0.75, 'eggSheet')
        .play('egg-idle');

    }
}
